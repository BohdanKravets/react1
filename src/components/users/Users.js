import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from "react";
import {getUsers} from "../../services/api";
import {setUsers, setUsersError, startUsersLoading, stopUsersLoading} from '../../redux'
import ErrorScreen from "../errorScreen/ErrorScreen";
import LoadingScreen from "../loadingScreen/LoadingScreen";
import User from "../user/User";

export default function Users() {
    const usersData = useSelector(({users}) => users);
    const dispatch = useDispatch();

    const usersFetcher = async () => {
        try {
            dispatch(startUsersLoading());
            const resp = await getUsers();
            dispatch(setUsers(resp.data));
        } catch (e) {
            dispatch(setUsersError('Failed to fetch data from users'));

        } finally {
            dispatch(stopUsersLoading());
        }

    }


    useEffect(() => {
        usersFetcher();
    }, []);

    if (usersData.isUsersLoading) {
        return <LoadingScreen data={'Users'}/>
    }

    if (usersData.usersError) {
        return <ErrorScreen error={usersData.isUsersLoading}/>
    }

    return (
        <div>
            {
                usersData.users.map(value => <User
                    key={value.id}
                    item={value}
                />)
            }
        </div>
    );
}