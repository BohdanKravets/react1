import {useEffect, useState} from "react";

export default function CommentDetails(props) {
    const {match: {params: {id}}} = props;
    let [comment, setComment] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => value.find(item => item.id === +id))
            .then(value => setComment(value))
    }, [])
    console.log(comment)
    return (
        <div>

            {comment && <div>{comment.body}</div>}
        </div>
    );
}