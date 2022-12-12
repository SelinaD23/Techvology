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
            <section class="py-3"/>
            <SearchBar actionsList={userActionsList} setSearchList={setSearchList} fetchActions={fetchUserActions} />
                <div style={{ paddingBottom: '15px', textAlign: 'center' }}>
                <input
                    type="text"
                    id="title"
                    placeholder="Action Name/Description"
                    value={actionTitle}
                    style={{ width: '500px', height: '40px', borderRadius: '100px', textIndent: '15px' }}

                    onChange={(e) => setActionTitle(e.target.value)}
                />
                <span>     </span>
                <input
                    type="text"
                    id="carbon"
                    placeholder="Carbon Amount in Grams"
                    value={actionCarbon}
                    style={{
                        width: '300px', height: '40px', borderRadius: '100px', textIndent: '15px'}}
                    onChange={(e) => setActionCarbon(e.target.value)}
                />
                <span>     </span>
                <button onClick={handleCustomAction} class="btn border rounded-pill shadow-none">Add Action</button>
            </div>
            <List>
                {searchList.slice(0).reverse().map((action) => (
                        <div class="card" style={{ marginLeft: '32px', marginRight: '32px',paddingBottom: '15px' }}>
                            <div class="card-body bg-dark border rounded border-dark shadow-none">
                                <div class="container">
                                    <div class="row" style={{ marginLeft: '0px', marginRight: '0px' , marginTop: '10px', marginBottom: '10px'}}>
                                        <div class="col-md-6 text-start" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <h4>{action.title}</h4>
                                            <h6 class="text-muted mb-2">{action.timestamp.substring(0,10) + " | " + action.carbon_output + " grams of carbon"}</h6>
                                        </div>
                                        <div class="col-md-6 text-end d-xl-flex justify-content-xl-end align-items-xl-center">
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(searchList.indexOf(action))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#79220F" viewBox="0 0 16 16" class="bi bi-trash-fill" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ fontSize: '25px', marginTop: '8px', marginBottom: '8px', marginLeft: '8px', marginRight: '8px' }} title="Remove">
                                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"></path>
                                                </svg>
                                            </IconButton>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </List>
        </div>
    );
}

export default Log