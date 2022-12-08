import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor } from 'axios-jwt'
import { format } from "date-fns"

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../components/SearchBar';

import BASE_URL from '../utilities/constants';

const Action = () => {
    const [actionsList, setActionsList] = useState([]);
    const [searchList, setSearchList] = useState([]);

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
        console.log(sessionStorage.getItem("token"))
        await axios.post(`${BASE_URL}/log_action`, {
            action_id: action.id,
            title: action.title,
            carbon_output: action.carbon_output
        }, { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` } }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchActions();
    }, []);

    return (
        <div>
            <SearchBar actionsList={actionsList} setSearchList={setSearchList} fetchActions={fetchActions} />
            <List>
                {searchList.map((action) => (
                    <ListItem key={action.id}>
                        <ListItemText
                            primary={action.title + ": " + action.carbon_output + " lbs of carbon"}
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