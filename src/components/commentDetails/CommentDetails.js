import {useEffect, useState} from "react";
import {getComments} from "../../services/api";

export default function CommentDetails(props) {
    const {match: {params: {id}}} = props;
    let [comment, setComment] = useState(null);

    const commentData = async () => {
        const resp = await getComments();
        const findedComment = resp.data.find(item => item.id === +id)
        setComment(findedComment)
    }

    useEffect(() => {
       commentData();
    }, [])
    return (
        <div>

            {comment && <div>{comment.body}</div>}
        </div>
    );
}