import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Post from "../post/Post";
import PostDetails from "../postDetails/PostDetails";

export default function Users({match: {url}}) {
    console.log(url);

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);

            });

    }, []);
    return (
        <div>
            {
                posts.map(value => <Post
                    key={value.id}
                    item={value}
                    url={url}

                />)
            }

            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>

            </Switch>
        </div>
    );
}