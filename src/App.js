import Form from "./components/form/Form";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Post from "./components/post/Post";

export default function App() {
    return(
        <Router>
            <div>
                <Form/>
<Switch>

    <Route path={'/posts/:id'} component={Post}/>
</Switch>
            </div>
        </Router>
    );
}