import axios from "axios";

export const ServerAPI = axios.create({
    baseURL: 'http://localhost:8091/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

export const LoginAPI = axios.create({
    baseURL: 'http://localhost:8091/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
});