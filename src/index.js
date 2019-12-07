import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Axios from "axios";

Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Axios.defaults.headers.common["Authorization"] = "TOKEN KEN";
Axios.defaults.headers.post["Content-Type"] = "application/json";

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

//can use axios.interceptore.respinse.eject to remove it
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
