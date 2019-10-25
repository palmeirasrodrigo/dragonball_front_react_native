import axios from 'axios';

const api = axios.create({
    baseURL:"https://dragao-api.herokuapp.com",

});

export default api;