import { React, useState, useEffect } from 'react'
import axios from 'axios';
import {format} from "date-fns"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../components/SearchBar';

import BASE_URL from '../utilities/constants';
import globalVal from '../utilities/globalVar';

const Action = () => {
    const [actionsList, setActionsList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [currentUserLog, setCurrentUserLog] = useState([]);

    const fetchActions = async () => {
        const response = await axios.get(`${BASE_URL}/actions`);
        setActionsList(response.data.actions);
        console.log(actionsList);
        setSearchList(response.data.actions);
        console.log(searchList);
    }


    const handleDelete = async (id) => {
        try{
            await axios.delete(`${BASE_URL}/actions/${id}`);
            fetchActions();
        }catch(err){
            console.log(err);
        }
    }

    const handleLogAction = async (action) => {
        const currentUser = await axios.get(`${BASE_URL}/user/1`);
        console.log(currentUser);
        setCurrentUserLog(currentUser.data.user.actionLog);
        console.log(currentUserLog);
        let array = currentUserLog;
        array.push(action.id);
        console.log(array);
        await axios.put(`${BASE_URL}/user/1`, {
            actionLog: array
        }).then(response => {
                console.log(response);
        }).catch(error => {
                console.log(err);
        });
        setCurrentUserLog(array);
    }

    useEffect(() => {
        fetchActions();
    }, []);

    return (
        <div>
            <SearchBar actionsList={actionsList} setSearchList={setSearchList} />
            <List>
                {searchList.map((action) => (
                    <ListItem key={action.id}>
                        <ListItemText
                            primary={action.title + ": " + action.carbon_output + " lbs of carbon"}
                            secondary={format(new Date(action.created_at), "dd/MM/yyyy")}
                            onClick={() => handleLogAction(action)}
                        />
                        <IconButton edge="end" aria-label="add" onClick={() => handleLogAction(action)}>
                            <AddIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(action.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Action