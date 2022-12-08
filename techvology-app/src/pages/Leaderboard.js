import { React, useState, useEffect } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';

import BASE_URL from '../utilities/constants';

const Leaderboard = () => {
    const [usersList, setUsersList] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get(`${BASE_URL}/leaderboard`);
        console.log(response.data);
        setUsersList(response.data.users);
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <List>
                {usersList.map((user) => (
                    <ListItem key={user.score}>
                    <ListItemText
                        primary={user.username + ": " + user.score + " lbs of carbon"}
                    />
                </ListItem>
            ))}
        </List>
        </div>
    );
}

export default Leaderboard