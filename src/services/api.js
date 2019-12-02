import axios from 'axios';

const api = axios.create({
    baseURL:"http://192.168.0.17:9000/api"
});

export default api;
