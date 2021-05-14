import {useEffect, useState} from "react";
import Comment from "../comment/Comment";
import {getComments} from '../../services/api'

export default function Comments() {
    let [comments, setComments] = useState([]);

    const commentsData = async () => {
        const resp = await getComments();
        setComments(resp.data);

    }

    useEffect(() => {
        commentsData();
    }, []);

    return (
        <div>
            {
                comments.map(value =>
                    <Comment
                        key={value.id}
                        item={value}
                    />)
            }
        </div>
    );
}