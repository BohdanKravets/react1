import {useEffect, useState} from "react";

export default function InventoryDetails(props) {
   const {match:{params:{id}}} = props;
let [inventory,setInventory] = useState(null);

    const fetchData = async () =>{
        const resp = await fetch('https://api.sampleapis.com/futurama/inventory');
        const json = await resp.json();
        const findedInventory = await json.find(value => value.id === +id)
        setInventory(findedInventory);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div>
            {
               inventory && <div>{inventory.description}</div>
            }

        </div>
    );
}