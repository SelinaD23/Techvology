import React, {useState} from "react";
import './App.css';
import LoginForm from "./components/LoginForm.js"


const App = () => {
    return (
        <div className="main-container">
            <LoginForm />
        </div>
    );
}

export default App;