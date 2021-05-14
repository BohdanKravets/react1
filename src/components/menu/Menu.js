import {Link} from "react-router-dom";

export default function Menu() {
    return(
        <div>
            <Link to={'/'}>home </Link>
            <Link to={'/users'}>users </Link>
            <Link to={'/posts'}>posts </Link>
            <Link to={'/comments'}>comments</Link>
        </div>
    );
}