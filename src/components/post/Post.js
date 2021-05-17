import {useLocation} from "react-router-dom";

export default function Post(props) {
    let {state : item} = useLocation();
    // console.log(state);
    return (
        <div>
            <h1>USER</h1>
            <h4>{item.id}. {item.title}</h4>
            <p>{item.body}</p>
        </div>
    );
}