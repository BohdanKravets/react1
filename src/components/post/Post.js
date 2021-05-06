export default function Post({item,search}) {

    return (
        <div>
            {item.id}.
            {item.title}
            <button onClick={() => search(item.id)}>details</button>
        </div>
    );
}