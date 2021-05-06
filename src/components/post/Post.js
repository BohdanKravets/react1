import './Post.css'

export default function Post({item,search}) {

    return (
        <div className={'post'}>
            {item.id}.
            {item.title}
            <button onClick={() => search(item.id)}>details</button>
        </div>
    );
}