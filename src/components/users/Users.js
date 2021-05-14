import {useEffect, useState} from 'react';
import User from '../user/User';
import {Route, Switch} from 'react-router-dom';
import UserDetails from '../userDetails/UserDetails';
import {getUsers} from "../../services/api";

export default function Users({match: {url}}) {

    let [users, setUsers] = useState([]);

    const usersData = async () =>{
        const resp = await getUsers();
        setUsers(resp.data)
    }

    useEffect(() => {
        usersData();
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
