import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import User from "../user/User";


export default function Users({location:{search,pathname}}) {


    let [usersData, setUsersData] = useState(null);


    let counter = +search.slice(6);
let url = pathname +search;
    useEffect(() => {
        fetch('https://reqres.in/api'+ url)
            .then(value => value.json())
            .then(value => {
                setUsersData(value)
            })
    }, [counter])


    return (
        <div>
            {
                usersData && usersData.data.map(value =>
                <User key ={value.id} item = {value} url ={url}/>)

            }
            <div className={'button'}>
                <Link to={{pathname: pathname,
                    search: `?page=${counter > 1 ? counter - 1 : counter}`}}>back </Link>


                <Link to={{pathname: pathname,
                    search: `?page=${counter < 2 ? counter + 1 : counter}`}}>next</Link>
            </div>

        </div>
    );
}