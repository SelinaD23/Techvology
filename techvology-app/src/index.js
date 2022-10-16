import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// NOTE: root is the id of the div in index.html located in public folder
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);