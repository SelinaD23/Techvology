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

const Action = () => {
    const [actionsList, setActionsList] = useState([]);

    const fetchActions = async () => {
        const response = await axios.get(`${BASE_URL}/actions`);
        setActionsList(response.data.actions);
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
    }, []);

    return (
        <div>
            <SearchBar fetchActions={fetchActions}/>
            <List>
                {actionsList.map((action) => (
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

export default Action