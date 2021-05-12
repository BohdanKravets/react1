import {useEffect, useState} from "react";
import User from "../../users/User";



export default function Users(props) {
    let {match:{url}} = props;
    
    
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers([...value]))
    },[]);

    return (
        <div>
            {
                users.map(value => <User key={value.id} item={value} url = {url}/>)
            }
            {/*<Switch>*/}
            {/*    <Route path={'/users/:id'} component={UserDetails}/>*/}

            {/*</Switch>*/}
        </div>
    );
}