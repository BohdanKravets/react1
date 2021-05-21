import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

const getposts = async () => {
  const resp =  await axiosInstance.get('/posts');
}

export {getposts};