import axiosInstance from '../../services/api'
import {useEffect, useState} from "react";
import User from "../user/User";
import './Comments.css'

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [chosenComment, setChosenComment] = useState(null);

    useEffect(() => {
        axiosInstance.get('/comments')
            .then(value => setComments([...value.data]));
    }, []);

    const search = (id) => {
        let findedComment = comments.find(value => id === value.id);
        setChosenComment(findedComment);
    }

    return (
        <div className={'wrapper'}>
            <div className={'comments-box'}>{
                comments.map(item =>
                    <User
                        key={item.id}
                        item={item}
                        search={search}
                    />
                )
            }</div>
            <div className={'chosen-comment-box'}>
                {
                    chosenComment ?
                        (<div>
                            <div>{chosenComment.id}</div>
                            <div>{chosenComment.name}</div>
                            <div>{chosenComment.email}</div>
                            <div>{chosenComment.body}</div>
                        </div>) :
                        (<div>
                            comment isn't chosen
                        </div>)
                }

            </div>
        </div>
    );
}

