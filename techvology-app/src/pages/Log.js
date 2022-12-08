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
    const [actionTitle, setActionTitle] = useState("");
    const [actionCarbon, setActionCarbon] = useState("");

    const fetchActions = async () => {
        const response = await axios.get(`${BASE_URL}/actions`);
        setActionsList(response.data.actions);
    }

    const fetchUserActions = async () => {
        const response = await axios.get(`${BASE_URL}/get_log`, { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` } });
        console.log(response.data);
        setUserActionsList(response.data)
        setSearchList(response.data)
    }

    const handleDelete = async (index) => { //Currently not working, probably just need to read the information and send out json data instead of doing it in the backend
        console.log("index is " + index)
        await axios.delete(`${BASE_URL}/del_logged_action/${index}`,
            { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` } }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        fetchUserActions();
    }

    const handleCustomAction = async () => {
        await axios.post(`${BASE_URL}/log_action`, {
            action_id: 10000,               //just chose an arbitrary high number
            title: actionTitle,
            carbon_output: actionCarbon
        }, { headers: { "Authorization": `Bearer ${sessionStorage.getItem("token")}` } }
        ).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
        fetchUserActions();
        setActionTitle = "";
        setActionCarbon = "";
    }

    useEffect(() => {
        fetchActions();
        fetchUserActions();
    }, []);

    return (
        <div>
            <SearchBar actionsList={userActionsList} setSearchList={setSearchList} fetchActions={fetchUserActions} />
            <div>
                <input
                    type="text"
                    id="title"
                    placeholder="Action Name"
                    value={actionTitle}
                    onChange={(e) => setActionTitle(e.target.value)}
                />
                <input
                    type="text"
                    id="carbon"
                    placeholder="Carbon"
                    value={actionCarbon}
                    onChange={(e) => setActionCarbon(e.target.value)}
                />
                <button onClick={handleCustomAction}>Add Action</button>
            </div>
            <List>
                {searchList.slice(0).reverse().map((action) => (
                    <ListItem key={searchList.indexOf(action)}>
                        <ListItemText
                            primary={action.title + ": " + action.carbon_output + " lbs of carbon"}
                        />
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(searchList.indexOf(action))}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Log