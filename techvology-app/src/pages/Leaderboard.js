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
                {usersList.map((user, index) => (
                    <ListItem key={user.score}>
                        <div class="card-body bg-dark border rounded border-0" style={{marginLeft: '26px', marginRight: '26px', marginTop: '10px', marginBottom: '10px', paddingTop: '20px', paddingBottom: '20px'}}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-xl-2 text-center d-xl-flex justify-content-xl-center align-items-xl-center">
                                        <h1 class="fw-bold text-primary">#{index+1}</h1>
                                    </div>
                                    <div class="col-md-6">
                                        <h3 class="fw-semibold">{user.username}</h3>
                                        <h5 class="text-muted mb-2">{user.score} pounds of carbon</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                </ListItem>
            ))}
        </List>
        </div>
    );
}

export default Leaderboard