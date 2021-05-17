import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Users(props) {

    console.log(props)
    let [usersData, setUsersData] = useState([]);
    let [counter, setCounter] = useState(1);
    let [totalPages, setTotalPages] = useState(0);

    let url = props.location.search.slice(0, 6) + counter;
    const previous = (counter) => {
        if (counter > 1) {
            props.location.search= props.location.search.slice(0, 6) + counter;
            setCounter(--counter)

        }
    }

    const next = (counter) => {
        if ((counter) < totalPages) {
            props.location.search= props.location.search.slice(0, 6) + counter;
            setCounter(++counter)
        }

    }


    console.log(url)
    useEffect(() => {
        fetch('https://reqres.in/api/users' + url)
            .then(value => value.json())
            .then(value => {
                setUsersData(value.data)
                setTotalPages(value.total_pages)
            })
    }, [counter])

    console.log(usersData)
    console.log(totalPages)
    return (
        <div>
            {
                usersData && usersData.map(value => <div>
                    {value.email}
                </div>)

            }
            <div>

                <button onClick={() => previous(counter)}>back</button>



                    <button onClick={() => next(counter)}>next</button>


            </div>

        </div>
    );
}