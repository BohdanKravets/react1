import React, {useEffect, useState} from "react";
import Inventory from "../inventory/Inventory";

export default function Inventories() {

    let [intventories, setInventories] = useState([]);

    const fetchData = async () => {
        const resp = await fetch('https://api.sampleapis.com/futurama/inventory');
        const json = await resp.json();
        setInventories(json);
    }

    useEffect(()=> {
        fetchData();
    }, [])


    return (
        <div>
            {
                intventories.map(value => <Inventory key = {value.id} item={value}/>)
            }

        </div>
    );
}