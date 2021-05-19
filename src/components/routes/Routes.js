import {Route, Switch} from 'react-router-dom'
import Home from "../home/Home";
import Counter from "../counter/Counter";

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/counter'} component={Counter}/>
            </Switch>
        </div>
    );
}