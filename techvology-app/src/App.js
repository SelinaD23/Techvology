import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from "./pages/LoginForm.js"
import NavBar from "./components/NavBar.js"
import Leaderboard from "./pages/Leaderboard.js"
import Donation from "./pages/Donation.js"
import Home from "./pages/Home";
import Action from "./pages/Action";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/action" element={<Action />} />
            </Routes>
        </div>
    );
}

export default App;