import {Switch,Route} from "react-router-dom";
import Posts from "../posts/Posts";
import Home from "../home/Home";
import Comments from "../comments/Comments";
import Albums from "../albums/Albums";
import Photos from "../photos/Photos";
import Todos from "../todos/Todos";
import Users from "../users/Users";
export default function Routes() {
    return(
        <div>
<Switch>
    <Route exact path={'/'} component = {Home}/>
    <Route path={'/posts'} component={Posts}/>
    <Route path={'/comments'} component={Comments}/>
    <Route path={'/albums'} component={Albums}/>
    <Route path={'/photos'} component={Photos}/>
    <Route path={'/todos'} component={Todos}/>
    <Route path={'/users'} component={Users}/>
</Switch>
        </div>
    );
}