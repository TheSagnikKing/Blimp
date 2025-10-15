import axios from "axios";

const BASE_URL = "https://blimp-final.onrender.com/api/v1/auth";

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
