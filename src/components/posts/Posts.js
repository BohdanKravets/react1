import {useEffect, useState} from "react";
import Post from "../post/Post";
import './Posts.css'
import axiosInstance from '../../services/api'

export default function Posts() {
    let [posts, setsPosts] = useState([]);
    let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        axiosInstance.get('/posts')
          .then(value => setsPosts([...value.data]))
    }, [])

    const search = (id) => {
        let findedPost = posts.find(value => id === value.id);
        setSinglePost(findedPost)
    }

    return (
        <div className={'wrap'}>
            <div className={'posts-box'}>{
                posts.map(item =>
                    <Post
                        key={item.id}
                        item={item}
                        search={search}
                    />)
            }</div>
            <div className={'single-post-box'}>
                {
                    singlePost ? (<div>{singlePost.body}</div>) : (<div>post isn't selected </div>)
                }
            </div>

        </div>


    );
}