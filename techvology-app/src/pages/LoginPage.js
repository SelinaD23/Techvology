import React, { useState } from "react";
import axios from 'axios';
import BASE_URL from '../utilities/constants';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const token = sessionStorage.getItem("token");

    const handleSubmit = async (event) => {
        try{
            const response = await axios.post(`${BASE_URL}/login`,{
                username: username,
                password: password
            });
            sessionStorage.setItem("token", response.data.access_token);
            console.log(response.data.access_token);
        } catch (err) {
            console.log(err);
        }
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <h1>Login</h1>
            {(token && token !== "" && token !== undefined) ? "You are logged in with " + token : 
                <div>
                    <input 
                        type="text" 
                        id="uname" 
                        placeholder="Username" 
                        value={username}
                        onChange = {(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        id="pass" 
                        placeholder="Password"
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleSubmit}>LOGIN</button>
                </div>
            }
        </div>
    )
}

export default LoginPage;