import {Route, Switch} from "react-router-dom";
import Home from "../home/Home";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import CommentDetails from "../commentDetails/CommentDetails";

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