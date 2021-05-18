import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom"
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

// Головна сторінка має лінки на сторінки з юзерами та постами з jsonplaceholer.
//     При кліку на лінку юзерс відбувається перехід на сторінку зі всіма юзерами. В кожного юзера є кнопка-лінка, при кліку на яку відображаються всі тільки його пости.
//     Та сама ситуація з постами, тільки при кліку на окремий пост відображається коментарі цього поста
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