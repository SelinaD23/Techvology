import { React, useState, useEffect } from 'react'
import axios from 'axios';
import {format} from "date-fns"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../components/SearchBar';

import BASE_URL from '../utilities/constants';

const Log = () => {
    const [actionsList, setActionsList] = useState([]);
    const [userActionsList, setUserActionsList] = useState([]);
    const [searchList, setSearchList] = useState([]);

    const fetchActions = async () => {
        const response = await axios.get(`${BASE_URL}/actions`);
        setActionsList(response.data.actions);
    }

    const fetchUserActions = async () => {
        const response = await axios.get(`${BASE_URL}/user/1`);
        //let actionLogKeys = response.data.user.actionLog;
        console.log(response.data.user.actionLog);
        console.log(response.data.user.actionLog.length);
        var i;
        let actionData = userActionsList;
        for (i = 0; i < response.data.user.actionLog.length; i++) {
            var res = await axios.get(`${BASE_URL}/actions/${response.data.user.actionLog[i]}`);
            var formattedData = `{
                                  "carbon_output": ${res.data.action.carbon_output},
                                  "created_at": ${res.data.action.created_at},
                                  "id": ${res.data.action.id},
                                  "title": ${res.data.action.title} 
                                 }`
            actionData.push(res.data.action);
        }
        console.log(res);
        console.log(formattedData);
        console.log(actionData);
        setUserActionsList(actionData);
        setSearchList(actionData);
        console.log(userActionsList);
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

    useEffect(() => {
        fetchActions();
        fetchUserActions();
    }, []);

    return (
        <div>
            <SearchBar actionsList={userActionsList} setSearchList={setSearchList} />
            <List>
                {searchList.map((action) => (
                    <ListItem key={action.id}>
                        <ListItemText
                            primary={action.title + ": " + action.carbon_output + " lbs of carbon"}
                            secondary={format(new Date(action.created_at), "dd/MM/yyyy")}
                        />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(action.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Log