import {Link} from 'react-router-dom'


export default function Inventory({item}) {
    return(
        <div>

            <Link to={'/inventories/' +item.id}>{item.id}. {item.title}</Link>

        </div>
    );
}