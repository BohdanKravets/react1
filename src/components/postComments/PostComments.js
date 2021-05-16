import {useEffect, useState} from "react";

export default function PostComments(props) {
    console.log(props)
    const {location: {state: post}} = props;
    let [comments,setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => value.filter(item => item.postId ===post.id))
            .then(value => setComments(value))
    },[post.id])

    console.log(comments);
    return (
        <div>
            <h2>{post.id}. {post.title}</h2>
            {
                comments.map(value =>
                    <div key={value.id}>{value.id}. {value.name}}</div>
                )
            }
        </div>
    );
}