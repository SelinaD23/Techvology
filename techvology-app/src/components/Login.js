import React, { useState } from "react";
import axios from 'axios';
import BASE_URL from '../utilities/constants';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");
    var currentUser = sessionStorage.getItem("curr_username");

    const handleLogin = async (event) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, {
                username: username,
                password: password
            });
            sessionStorage.setItem("token", response.data.access_token);
            sessionStorage.setItem("curr_username", username);
            console.log(response.data.access_token);
        } catch (err) {
            console.log(err);
        }
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            {(token && token !== "" && token !== undefined) ? 
                <p class="display-6 ">Welcome {currentUser}!</p>:
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} value = {username}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} value = {password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleLogin} style={{ backgroundColor: '#37782C', color: '#FEFED3' }}>
                        Login
                    </Button>
                </Form>
            }
        </div>
    )
}

export default Login;