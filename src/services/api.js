import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


const getPosts = () => axiosInstance.get('/posts');


export {axiosInstance,  getPosts};