import {Link} from "react-router-dom";
import './Menu.css';

export default function Menu() {
    return (
        <div className={'menu'}>
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