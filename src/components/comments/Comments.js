import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from "react";
import {getComments} from "../../services/api";
import {setComments, startCommentsLoading, stopCommentsLoading, setCommentsError} from '../../redux'
import Comment from "../comment/Comment";
import ErrorScreen from "../errorScreen/ErrorScreen";
import LoadingScreen from "../loadingScreen/LoadingScreen";

export default function Comments() {
    const commentsData = useSelector(({comments}) => comments);
    const dispatch = useDispatch();

    const commentsFetcher = async () => {
        try {
            dispatch(startCommentsLoading());
            const resp = await getComments();
            dispatch(setComments(resp.data));
        } catch (e) {
            dispatch(setCommentsError('Failed to fetch data from posts'));

        } finally {
            dispatch(stopCommentsLoading());
        }

    }


    useEffect( () => {
        commentsFetcher();
    }, []);

    if (commentsData.isCommentsLoading) {
        return <LoadingScreen data ={'Comments'}/>
    }

    if (commentsData.commentsError) {
        return <ErrorScreen error={commentsData.isCommentsLoading}/>
    }

    return (
        <div>
            {
             commentsData &&   commentsData.comments.map(value => <Comment
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}