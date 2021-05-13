import React, {useState, useEffect} from 'react';


export default function CastDetails(props) {
    let {match:{params:{id}}} = props;
    let [cast,setCast] = useState([]);

    const fetchData = async () =>{
        const resp = await fetch('https://api.sampleapis.com/futurama/cast');
        const json = await resp.json();
        const findedCast = await json.find(value => value.id === +id)
        setCast(findedCast);
    }

    useEffect(() => {
        fetchData();
    },[]);

    const {bio, name, born} = cast
    // console.log(bio);
    return(
    < div >
    {
        cast && <div>
        <div>{name} {born}</div>
        {/*<div>{bio.url || 'none url'}</div>*/}
    </div>
            }
        </div>
    );
}