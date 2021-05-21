import {useSelector} from 'react-redux';
import {useEffect} from "react";
import {getposts} from "../../services/api";

export default function Posts() {
    const store = useSelector((state)=>state);
useEffect({

},[])

    return(
        <div>
Posts
        </div>
    );
}