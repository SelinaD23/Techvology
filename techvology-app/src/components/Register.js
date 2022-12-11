import React, { useState } from "react";
import axios from 'axios';
import BASE_URL from '../utilities/constants';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Register = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async (event) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, {
                username: username,
                password: password
            });
        } catch (err) {
            console.log(err);
        }
        setUsername("");
        setPassword("");
        props.setHasAccount(true);
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleRegister} style={{ backgroundColor: '#37782C', color: '#FEFED3' }}>
                Register
            </Button>
        </Form>
    )
}

export default Register;