import React, { useState } from "react";

const LoginForm = (props) => {

    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [loggedIn, setLoggedIn] = useState(false);
    
    // Placeholder accounts database
   const database = [
        {
        username: "user",
        password: "pass"

        },
        {
        username: "admin",
        password: "admin"
        }
    ];
 
    /*
    var database = [
        {
            username: "user",
            password: "pass",
            actions: []

        },
        {
            username: "admin",
            password: "admin",
            actions: []
        }
    ];
    */

    const error = "Your username and/or password are incorrect. Please try again.";
    
    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
            if (userData.password === pass.value) {
                setLoggedIn(true);
            }
        } else {
        // Login information does not match
        setErrorMessages({ name: "error", message: error });
        }
    };
    
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );
    
    // Login Form 
    const renderForm = (
        <div className="form">
        <form onSubmit={handleSubmit}>
            
            <div className="input-container">
            <label>Username </label>
            <input 
                type="text" 
                name="uname" 
                placeholder="Enter Username"
                required 
            />
            </div>

            <div className="input-container">
            <label>Password </label>
            <input 
                type="password" 
                name="pass" 
                placeholder="Enter Password"
                required 
            />
            </div>

            <div className="button-container">
            <input 
                type="submit" 
            />
            {renderErrorMessage("error")}
            </div>

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