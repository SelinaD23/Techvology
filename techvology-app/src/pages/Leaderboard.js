import { React, useState, useEffect } from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Leaderboard = () => {
    var database = [
        {
            username: "user",
            password: "pass",
            actionTotal: 100

        },
        {
            username: "admin",
            password: "admin",
            actionTotal: 50
        },
        {
            username: "test",
            password: "test",
            actionTotal: 150
        },
        {
            username: "kyle",
            password: "pass",
            actionTotal: 30
        }
    ];

    const usersOrder = [...database].sort((a, b) => a.actionTotal - b.actionTotal);
    console.log(usersOrder);

    return (
        <div>
            <List>
                {usersOrder.map((user) => (
                    <ListItem key={user.actionTotal}>
                    <ListItemText
                        primary={user.username + ": " + user.actionTotal + " lbs of carbon"}
                    />
                </ListItem>
            ))}
        </List>
        </div>
    );
}

export default Leaderboard