import {useEffect, useState} from "react";
import Post from "../post/Post";
import {Route, Switch} from "react-router-dom";
import PostComments from "../postComments/PostComments";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div>
            <Switch>
                <Route path={'/posts/:id'} component={PostComments}/>

            </Switch>

            {
                posts.map(value =>
                    <Post
                        key={value.id}
                        item={value}
                    />
                )
            }
        </div>
    );
}