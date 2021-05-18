import {Link} from "react-router-dom";

export default function User({item, url}) {


    return (
        <div>
            {item.id}. {item.first_name} {item.last_name}
            <Link to={{pathname: `${url}/${item.id}`, state: item}}>details</Link>
        </div>
    );
}