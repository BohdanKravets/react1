import './App.css';
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div>
            <Router>
                <Link to={'/users'}>to users</Link> <br/>
                <Link to={'/posts'}>to posts</Link> <br/>
                <Link to={'/comments'}>to comments</Link>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>
                    <Route path={'/comments'} render={() => (<Comments/>)}/>

                </Switch>


            </Router>
        </div>
    );
}

export default App;