export default function Todo({item}) {
    return(
        <div>
            {item.id}. {item.title}
        </div>
    );
}