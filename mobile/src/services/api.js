import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.6:19000',
});

export default api;