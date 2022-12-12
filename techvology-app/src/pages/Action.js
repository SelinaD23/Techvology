import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor } from 'axios-jwt'
import { format } from "date-fns"

import List from '@mui/material/List';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import SearchBar from '../components/SearchBar';

import BASE_URL from '../utilities/constants';

const style = {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#666982',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '40px',
    p: 4,
};

const Action = () => {
    const [actionsList, setActionsList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    

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
            handleOpen();
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
            <section class="py-3"/>
            <SearchBar actionsList={actionsList} setSearchList={setSearchList} fetchActions={fetchActions} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Button
                        onClick={handleClose}
                        style={{ float: "right", marginBottom: "10px" }}
                    >
                        <CloseIcon style={{ color: '#424354' }} />
                    </Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Action logged!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
                    </Typography>
                </Box>
            </Modal>
            <List>
                {searchList.map((action) => (
                        <div class="card" style={{ marginLeft: '32px', marginRight: '32px',paddingBottom: '15px' }}>
                            <div class="card-body bg-dark border rounded border-dark shadow-none">
                                <div class="container">
                                    <div class="row" style={{ marginLeft: '0px', marginRight: '0px' , marginTop: '10px', marginBottom: '10px'}}>
                                        <div class="col-md-6 text-start" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <h4>{action.title}</h4>
                                            <h6 class="text-muted mb-2">{action.carbon_output + " grams of carbon"}</h6>
                                        </div>
                                        <div class="col-md-6 text-end d-xl-flex justify-content-xl-end align-items-xl-center">
                                            <IconButton edge="end" aria-label="add" onClick={() => handleLogAction(action)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#37782C" viewBox="0 0 16 16" class="bi bi-plus-circle" data-bs-toggle="tooltip" data-bss-tooltip="" style={{ fontSize: '25px', marginTop: '8px', marginBottom: '8px', marginLeft: '8px', marginRight: '8px' }} title="Add">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
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

export default Action