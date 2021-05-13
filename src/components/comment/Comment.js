import {Link} from "react-router-dom";


export default function Comment({item}) {
    return (
        <div>
            <Link to={'/comments/' + item.id}>{item.id}. {item.name}</Link>
        </div>
    );
}