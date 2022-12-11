import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/Navbar-With-Button-icons.css";
import "./assets/css/Hero-Clean-images.css";

//import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter } from "react-router-dom";

// NOTE: root is the id of the div in index.html located in public folder
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);