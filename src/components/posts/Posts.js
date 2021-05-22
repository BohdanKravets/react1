import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import {getPosts} from "../../services/api";
import {setPosts,startPostsLoading,stopPostsLoading,setPostsError} from '../../redux'
import Post from "../post/Post";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import ErrorScreen from "../errorScreen/ErrorScreen";


export default function Posts() {
    const postsData = useSelector(({posts}) => posts);
    const dispatch = useDispatch();

    const postsFetcher = async () => {
        try {
            dispatch(startPostsLoading());
            const resp = await getPosts();
            dispatch(setPosts(resp.data));
        } catch (e) {
            dispatch(setPostsError('Failed to fetch data from posts'));
            console.log(e);
        } finally {
            dispatch(stopPostsLoading());
        }

    }

    useEffect(() => {
        console.log('posts')
        postsFetcher();
    }, []);

    if (postsData.isPostsLoading) {
        return <LoadingScreen data ={'Posts'}/>

    }
    if(postsData.postsError){
        return <ErrorScreen error ={postsData.postsError}/>
    }
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