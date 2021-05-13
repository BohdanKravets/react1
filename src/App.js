import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./components/userDetails/UserDetails";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/commentDetails/CommentDetails";

export default function App() {
    return (
        <Router>
            <div>
                <div><Link to={'/'}>home page</Link></div>
                <div><Link to={'/users'}>users page</Link></div>
                <div><Link to={'/posts'}>posts page</Link></div>
                <div><Link to={'/comments'}>comments page</Link></div>
                <hr/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route exact path={'/users'} component={Users}/>
                    <Route exact path={'/posts'} component={Posts}/>


                    <Route exact path={'/comments'} component={Comments}/>
                    <Route path={'/comments/:id'} component={CommentDetails}/>
                </Switch>
                <hr/>
            </div>
        </Router>

    );
}