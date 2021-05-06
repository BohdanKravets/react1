export default function User({item,search}) {
    return(
        <div className={'user'}>
            {item.id} -
            {item.name}
            <button onClick={() =>search(item.id)}>details</button>
        </div>
    );
}