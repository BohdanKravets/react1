import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import {getPosts} from "../../services/api";
import {START_POST_LOADING, STOP_POST_LOADING, SET_POSTS} from '../../redux'
import Post from "../post/Post";


export default function Posts() {
    const postsData = useSelector((state) => state);
    console.log(postsData)
    const dispatch = useDispatch();
    const postsFetcher = async () => {
        try {
            const resp = await getPosts();
            dispatch({type: SET_POSTS, payload: resp.data})
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        postsFetcher();
    }, [])

    return (
        <div>
            {
                postsData.posts.map(value => <Post
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}