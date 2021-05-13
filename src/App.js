
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/home/Home';

import Users from './components/users/Users';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>

                        <Link to={'/'}>home</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>about</Link>

                    </li>

                    <li>
                        <Link to={'/users'}>users</Link>

                    </li>
                    <hr/>

                    <Switch>

                        <Route exact path={'/'}>
                            <Home/>
                        </Route>


                        <Route path={'/users'} component={Users}/>

                    </Switch>
                    <hr/>


                </ul>
            </div>
        </Router>
    );
}

export default App;