import {Link} from 'react-router-dom'

export default function Cast({item, url}) {
    return (
        <div>
            <div>{item.id}. {item.name}</div>
            <div><Link to={url + '/' + item.id}>details</Link></div>
        </div>
    )
}