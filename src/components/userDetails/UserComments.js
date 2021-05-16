import {useEffect, useState} from "react";

export default function UserComments(props) {
    const {location: {state: user}} = props;
    let [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => value.filter(item => item.userId ===user.id))
            .then(value => setPosts(value))
    },[user.id])

    console.log(posts);
    return (
        <div>
            <h2>{user.id}. {user.name}</h2>
            {
                posts.map(value =>
                <div key ={value.id}>{value.id}. {value.title}}</div>
                )
            }
        </div>
    );
}