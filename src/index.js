import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Axios from "axios";

//whole axios share one configuration, can send request with auth information
Axios.interceptors.request.use(
    req => {
        console.log(req);

        return req; //need to return the req to unblock the request
    },
    err => {
        console.log(err);
        return Promise.reject(err); //can handle no internet or no authentication
    }
);

Axios.interceptors.response.use(
    res => {
        console.log(res);

        return res; //need to return the res to unblock the request
    },
    err => {
        console.log(err);
        return Promise.reject(err); //can handle no internet or no authentication
    }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
