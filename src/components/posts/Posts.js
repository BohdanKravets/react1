import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";
import {getPosts} from "../../services/api";


export default function Posts({match: {url}}) {
    let [posts, setPosts] = useState([]);
    const postsData = async () => {
        const resp = await getPosts();
        setPosts(resp.data);
    }

    useEffect(() => {
      postsData();
    }, []);

    return (
        <div>
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>

            {
                posts.map(value => <Post
                    key={value.id}
                    item={value}
                    url={url}

                />)
            }
        </div>
    );
}