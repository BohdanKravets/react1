import {Link} from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return(
        <div className={'menu'}>
<Link to={'/'}>home</Link>
<Link to={'/counter'}>counter</Link>

        </div>
    );
}