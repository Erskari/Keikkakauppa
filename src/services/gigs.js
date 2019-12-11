import axios from 'axios';
const baseUrl = 'http://localhost:3001/gigs';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const add = newGig => {
    const request = axios.post(baseUrl, newGig)
    return request.then(response => response.data)
}

export default {
    getAll: getAll,
    add: add,
}