import {Link} from "react-router-dom";

export default function Post({item}) {
    return (
        <div>
            {item.id} - {item.title}
            <Link to={{pathname: '/posts/'+item.id , state:item, search: '?q=comments'}} > -> to post comments</Link>
        </div>
    );
}