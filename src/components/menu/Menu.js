import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <Link to={'/'}>Home page</Link>
            <Link to={'/casts'}>Cast page</Link>
            <Link to={'/inventories'}>Inventory page</Link>
        </div>
    );
}