import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
}
    from 'react-router-dom'
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";


export default function App() {


    return (
        <Router>
            <div>
                <Link to={'/'}>home </Link>
                <Link to={{pathname: '/users', search: `?page=1`}}>users</Link>

                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users?page=:id/:id'} component={UserDetails}/>
                </Switch>
            </div>
        </Router>
    );
}