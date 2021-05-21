import {Switch,Route} from "react-router-dom";
import Posts from "../posts/Posts";
import Home from "../home/Home";
export default function Routes() {
    return(
        <div>
<Switch>
    <Route exact path={'/'} component = {Home}/>
    <Route path={'/posts'} component={Posts}/>
</Switch>
        </div>
    );
}