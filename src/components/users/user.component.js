export default function User(props) {
    let {name, age, status, id, deleteUser} = props;

    return <div>
        <p>{name} - {age} - {status.toString()}</p>
        <button onClick={() => deleteUser(id)}>delete</button>
    </div>


}