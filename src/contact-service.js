import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5000/contacts/',
    headers: {'Content-Type': 'application/json'},
})