import {useEffect, useState} from 'react';
import {axiosInstance} from "../../services/api";

export default function PostDetails(props) {
    let {match: {params: {id}}} = props;
    let [post, setPost] = useState(null);

    const postData = async () => {
        const resp = await axiosInstance.get('/posts/' + id)
        setPost(resp.data)
    }

    useEffect(() => {
        postData();
    }, [id]);

    return (
        <div>
            {
                post &&
                <div>
                    <h3>{post.id}. {post.title}</h3>
                    <div>{post.body}</div>
                    <hr/>
                </div>
            }
        </div>
    );
}