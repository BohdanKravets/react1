import {Link} from "react-router-dom";

export default function Post({item, url}) {
    return (
        <div>
            <div>{item.id} {item.title}</div>
            <div><Link to={url + '/' + item.id}>details</Link></div>
        </div>
    );
}