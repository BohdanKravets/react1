import {useEffect, useState} from "react";
import User from "../user/User";
import './Users.css'
import axiosInstance from "../../services/api"

export default function Users() {
    let [users, setUsers] = useState([]);
let [singleUser,setSingleUser] = useState(null);

    useEffect(() => {
        axiosInstance.get('/users')
            .then(value => setUsers([...value.data]))
    }, []);

    const search = (id) => {
        let findedUser = users.find(value => id === value.id);
        setSingleUser(findedUser);
    }

    return (
        <div className={'wrapper'}>
            <div className={'users-box'}>{
                users.map(item =>
                    <User
                        key={item.id}
                        item={item}
                        search={search}
                    />)

            }</div>

            <div className={'single-user-box'}>
                {
                    singleUser &&
                    <div>{singleUser.username} <br/>
                        {singleUser.email} <br/>
                        {singleUser.address.city} <br/>
                        {singleUser.address.street} <br/>
                        {singleUser.phone} <br/>
                        {singleUser.company.name}</div>
                
                }
            </div>

        </div>
    );
}
