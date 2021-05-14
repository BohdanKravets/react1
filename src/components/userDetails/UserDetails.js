import {useEffect, useState} from 'react';
import {axiosInstance} from "../../services/api";
import {useParams} from 'react-router-dom'

export default function UserDetails() {
    let params = useParams();
    let [user, setUser] = useState(null);

    const userData = async () => {
        const resp = await axiosInstance.get('/users/' + params.id);
        setUser(resp.data)
    }

    useEffect(() => {
       userData();

    }, [params.id]);

    return (
        <div>
            {
                user &&
                    <div>
                        <hr/>
                        <h3>{user.id} - {user.name} -{user.username}</h3>
                        <div>Address: {user.address.city} - {user.email} - {user.phone} </div>
                    </div>
            }
        </div>
    );
}