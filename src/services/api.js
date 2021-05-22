import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});


const getPosts = () => axiosInstance.get('/posts');
const getComments = () => axiosInstance.get('/comments');
const getAlbums = () => axiosInstance.get('/albums');
const getPhotos = () => axiosInstance.get('/photos');
const getTodos = () => axiosInstance.get('/todos');
const getUsers = () => axiosInstance.get('/users');

export {axiosInstance, getPosts, getComments, getAlbums, getPhotos, getTodos, getUsers};