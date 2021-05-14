import {Route, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import Users from "../components/users/Users";
import Posts from "../components/posts/Posts";
import Comments from "../components/comments/Comments";
import CommentDetails from "../components/commentDetails/CommentDetails";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route path={'/users'} component={Users}/>
                <Route path={'/posts'} render={(props) => <Posts
                    {...props} />}/>
                <Route exact path={'/comments'} component={Comments}/>
                <Route path={'/comments/:id'} component={CommentDetails}/>
            </Switch>
        </div>
    );
}