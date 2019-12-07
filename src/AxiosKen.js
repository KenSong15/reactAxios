import Axios from "axios";

const instance = Axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

Axios.defaults.headers.common["Authorization"] = "TOKEN KEN from instance";

export default instance;
