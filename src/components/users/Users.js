import {useEffect, useState} from 'react';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserDetails from '../userDetails/UserDetails';

export default function Users({match: {url}}) {
    console.log(url);

    let [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);

            });

    }, []);
    return (
        <div>
            {
                users.map(value => <User
                    key={value.id}
                    item={value}
                    url={url}

                />)
            }

            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>

            </Switch>
        </div>
    );
}
