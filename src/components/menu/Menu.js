import {Link} from "react-router-dom";

export default function Menu() {
    return (
        <div>
            <Link to={'/'}> home</Link>
            <Link to={'/posts'}>posts</Link>
            <Link to={'/comments'}>comments</Link>
            <Link to={'/albums'}>albums</Link>
            <Link to={'/photos'}>photos</Link>
            <Link to={'/todos'}>todos</Link>
            <Link to={'/users'}>users</Link>
        </div>
    );
}