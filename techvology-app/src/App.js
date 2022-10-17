import React, {useState} from "react";
import './App.css';
import LoginForm from "./components/LoginForm.js"
import NavBar from "./components/NavBar.js"


const App = () => {
    return (
        <div>
            <NavBar />
            <LoginForm />
        </div>
    );
}

export default App;