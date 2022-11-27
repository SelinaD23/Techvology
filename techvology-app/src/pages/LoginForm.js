import React, { useState } from "react";
import axios from 'axios';

const LoginForm = (props) => {

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem("loggedIn") !== null);
    
    const incorrect = "Your username and/or password are incorrect. Please try again.";
    
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
        
        // get data from loginForm
        var username = document.getElementById("uname").value;
        var password = document.getElementById("pass").value;
        
        const login = {'username': username, 'password': password};

        // login with axios
        axios.post('/login', { body: {username: ""+login['username'], password: ""+login['password']} }, {'content-type': 'application/json'})
        .then(function(response) {
            setLoggedIn(true);
            sessionStorage.setItem('loggedIn', true);
            setErrorMessages({name: "error", message: 'success'});
          }).catch(function(error) {
            setErrorMessages({ name: "error", message: incorrect });
          });
    };

    const handleRegister = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var setname = document.getElementById("setname").value;
        var setpass = document.getElementById("setpass").value;
        var confirmpass = document.getElementById("confirmpass").value;
        
        if(setpass.value !== confirmpass.value){
            setErrorMessages({ name: "reg error", message: "Passwords do not match."+setname.value+ setpass.value+ confirmpass.value });
            return;            
        }
        else{
            const register = {
                'username': setname,
                'password': setpass
              };
    
            // register with axios
            setErrorMessages({ name: "error", message: "Registering" });
            axios.post('/login/register', { body: {username: ""+register['username'], password: ""+register['password']} }, {'content-type': 'application/json'})
            .then(function(response) {
                setErrorMessages({ name: "reg error", message: "Registered" });
                setLoggedIn(true);
              }).catch(function(error) {
                setErrorMessages({ name: "reg error", message: ""+error });
              });
        }
        return;
    };
    
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );
    
    // Login Form 
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit} id="loginForm">
                <h4>Log in</h4>
                <div className="form-group">
                    <label for="uname">Username</label>
                    <input type="text" className="form-control" id="uname" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" id="pass" placeholder="Enter Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {renderErrorMessage("error")}

            </form>
            <form onSubmit={handleRegister} id="registerForm">
                <h4>Register</h4>
                <div className="form-group">
                    <label for="uname">Username</label>
                    <input type="text" className="form-control" id="setname" placeholder="Set username" />
                </div>
                <div className="form-group">
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" id="setpass" placeholder="Set Password" />
                </div>
                <div className="form-group">
                    <label for="pass">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmpass" placeholder="Reenter Password" />
                </div>
                <button type="submit" className="btn btn-secondary">Submit</button>
                {renderErrorMessage("reg error")}
            </form>
        </div>
    );
    
    return (
        <div className="login-form">
            <header> Welcome to Techvology. Please sign in to get started.</header>
            {loggedIn ? <div>User is successfully logged in</div> : renderForm}
        </div>
    );
}

export default LoginForm