import React, {useState, useEffect} from 'react';
import Cast from "../cast/Cast";

export default function Casts(props) {
    let {match:{url}} = props;
    let [casts,setCasts] = useState([]);
    const fetchDataCast = async () => {
       const resp = await fetch('https://api.sampleapis.com/futurama/cast');
       const json = await resp.json();
       setCasts(json);
   }

    useEffect(()=> {
        fetchDataCast();
    }, [])

    return(
        <div>

            {
                casts.map(value => <Cast
                    key={value.id}
                    item ={value}
                    url = {url}
                />)
            }
        </div>
    );
}