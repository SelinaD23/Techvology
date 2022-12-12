import React, { useState } from "react";
import axios from 'axios';
import BASE_URL from '../utilities/constants';

const LoginPage = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [signupusername, setSignUpUsername] = useState("");
    const [signuppassword, setSignUpPassword] = useState("");
    const token = sessionStorage.getItem("token");
    var currentUser = sessionStorage.getItem("curr_username");


    const handleSubmit = async (event) => {
        try{
            const response = await axios.post(`${BASE_URL}/login`,{
                username: username,
                password: password
            });
            sessionStorage.setItem("token", response.data.access_token);
            sessionStorage.setItem("curr_username", username);
            console.log(response.data.access_token);
        } catch (err) {
            console.log(err);
        }        
        setSignUpUsername("");
        setSignUpPassword("");
        setUsername("");
        setPassword("");
        props.setHasAccount(true);
    }

    const handleSubmitR = async (event) => {
        try{
            const response = await axios.post(`${BASE_URL}/register`,{
                username: signupusername,
                password: signuppassword
            });
            sessionStorage.setItem("token", response.data.access_token);
            sessionStorage.setItem("curr_username", username);
            console.log(response.data.access_token);
        } catch (err) {
            console.log(err);
        }
        setSignUpUsername("");
        setSignUpPassword("");
        setUsername("");
        setPassword("");
        props.setHasAccount(true);
    }

    return (
        <div>
            {(token && token !== "" && token !== undefined) ?
            <section class="py-4 py-xl-5">
        <div class="container h-100">
            <div class="text-white border rounded border-0 p-4 py-5" style={{ backgroundColor: '#9FD983' }}>
                <div class="row h-100">
                    <div class="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center">
                        <div>
                            <h1 class="text-uppercase fw-bold text-white mb-3">Welcome {currentUser}!</h1>
                            <p class="mb-4">Track your next action today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> : 
                <div>
                    <section class="py-5"/>
                    <div class="container">
                    <div class="row gx-5">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body text-center bg-dark border rounded border-dark shadow d-flex flex-column align-items-center">
                                    <h2 class="fw-bold"><br /><strong>Login</strong><br /><br /></h2>
                                    <form>
                                        <div class="mb-3"><input class="form-control" type="text" id="uname" name="Username" value={username}
                        onChange={(e) => setUsername(e.target.value)} placeholder="Username" /></div>
                                        <div class="mb-3"><input class="form-control" type="password" name="password" id="pass" value={password}
                        onChange = {(e) => setPassword(e.target.value)} placeholder="Password" /></div>
                                        <div class="mb-3"><button class="btn btn-primary shadow d-block w-100" onClick={handleSubmit} style={{ backgroundColor: '#37782C' }}>Log in</button></div>
                                    </form>
                                </div>
                            </div>
                            
                        </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-body text-center border rounded border-dark shadow d-flex flex-column align-items-center" style={{backgroundColor: '#9FD983'}}>
                                        <h2 class="fw-bold"><br /><strong><span>Sign up</span></strong><br /><br /></h2>
                                        <form>
                                            <div class="mb-3"><input class="form-control" type="text" name="SignUpUsername" value={signupusername}
                        onChange={(e) => setSignUpUsername(e.target.value)} placeholder="Choose a Username" /></div>
                                            <div class="mb-3"><input class="form-control" type="password" name="SignUpPassword" value={signuppassword}
                        onChange={(e) => setSignUpPassword(e.target.value)} placeholder="Choose a Password" /></div>
                                            <div class="mb-3"><button class="btn btn-primary shadow d-block w-100" onClick={handleSubmitR}>Sign up</button></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                </div>
                </div>
                </div>
            }
        </div>
    )
}

export default LoginPage;