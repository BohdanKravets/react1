import './Comment.css'
export default function Comment({item,search}) {
    return(
        <div className={'comment'}>
            {item.id}. {item.name}
            <button onClick={()=> search(item.id)}>details</button>
        </div>
    );
}


