import axios from 'axios';
import {format} from "date-fns"

import { React, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar';

const baseUrl = "http://127.0.0.1:5000";

const Action = () => {
    const [actionsList, setActionsList] = useState([]);

    const fetchActions = async () => {
        const response = await axios.get(`${baseUrl}/actions`);
        const { data } = response.data;
        console.log(response.data.actions);
        setActionsList(response.data.actions);
    }

    useEffect(() => {
        fetchActions();
    }, []);

    return (
        <div>
            <SearchBar />
            <ul>
                {actionsList.map(action => (
                <li key={action.id}>
                    <div style={{display: 'flex'}}>
                        <h5>{action.title}</h5>
                        <p>{format(new Date(action.created_at), "MM/dd/yyyy")}</p>
                    </div>
                    <p>Carbon Output: {action.carbon_output}</p>
                </li>
                ))}
          </ul>
        </div>
    );
}

export default Action