import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import UserDetails from "./userDetails/UserDetails";
import PostDetails from "./components/postDetails/PostDetails";

export default function App() {
    return (

        <Router>
            <div>
                <div><Link to={'/'}>home page</Link></div>
                <div><Link to={'/users'}>users page</Link></div>

                <div><Link to={'/posts'}>posts page</Link></div>

                <hr/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>

                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users/:id'} component={UserDetails}/>

                    <Route exact path={'/posts'} component={Posts}/>
                    <Route path={'/posts/:id'} component={PostDetails}/>
                </Switch>

                <hr/>

            </div>
        </Router>

    );
}