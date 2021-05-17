import {useEffect, useState} from "react";
import Post from "../post/Post";
import {Link} from "react-router-dom";

export default function Form() {
    let [postId, setPostId] = useState(1);
    let [post, setPost] = useState(null);

    const changeUserId = ({target: {value}}) => {
        if (value >= 1 && value <= 100) {
            setPostId(+value);
        }
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [postId])

    return (
        <div>
            <form>
                <input type="number" name="userId" value={postId} onChange={changeUserId}/>
            </form>

            <Link to={{pathname: '/posts/' + postId, state: post}}>to post</Link>

            {/*{post && < Post item = {post}/>}*/}
        </div>
    )
}
// const [inputValue, setInputValue] = useState({
//     name: '',
//     email: '',
//     password: '',
// });
//
// const onChangeInputValue = ({target: {value, name}}) => {
//     setInputValue({...inputValue, [name]: value})
// }
//
// console.log(inputValue);
//
// return(
//     <div>
// //         <form >
//             {/*<input type="number" name={'numberField'}/>*/}
//             <input type="text"
//                    name={'name'}
//                    placeholder='Name'
//                    value={inputValue.name}
//                    onChange={onChangeInputValue}
//             />
//             <input type="email"
//                    name={'email'}
//                    placeholder='Email'
//                    value={inputValue.email}
//                    onChange={onChangeInputValue}
//             />
//             <input type="password"
//                    name={'password'}
//                    placeholder='Password'
//                    value={inputValue.password}
//                    onChange={onChangeInputValue}
//             />
//         </form>
//         </div>
//     );
// }