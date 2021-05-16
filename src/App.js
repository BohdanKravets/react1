import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom"
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";


export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home </Link>
                <Link to={'/users'}>users </Link>
                <Link to={'/posts'}>posts </Link>
                <hr/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>


                </Switch>


            </div>
        </Router>
    );
}