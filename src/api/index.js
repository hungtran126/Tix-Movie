import axios from 'axios';

export default axios.create({
    baseURL: "https://movie0706.cybersoft.edu.vn/api",
    headers: {
        Authorization: localStorage.getItem("user") ? `Bearer ${JSON.parse(localStorage.getItem("user")).accessToken}` : ``
    }
});