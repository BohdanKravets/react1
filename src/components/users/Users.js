import {useEffect, useState} from "react";
import User from "../user/User";
import {Route, Switch} from "react-router-dom";
import UserComments from "../userDetails/UserComments";


export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, []);

    return (
        <div>
            <Switch>
                <Route path={'/users/:id'} component={UserComments}/>
            </Switch>
<hr/>
            {
                users.map(value =>
                    <User
                        key={value.id}
                        item={value}
                    />
                )
            }
        </div>
    );
}