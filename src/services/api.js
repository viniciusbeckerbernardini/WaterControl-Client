import axios from 'axios';

const api = axios.create({
    baseURL:"http://10.176.139.27:9000/api"
});

export default api;
