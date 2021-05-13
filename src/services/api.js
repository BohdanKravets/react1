import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


const getUsers = () => axiosInstance.get('/users');
const getComments = () => axiosInstance.get('/comments');
const getPosts = () => axiosInstance.get('/posts');


export {axiosInstance, getUsers, getPosts, getComments};