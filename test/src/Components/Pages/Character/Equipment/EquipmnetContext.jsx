import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const EquipmentContext = createContext();

export const EquipmentCollection = (props) => {
  const [inventory, setInventory] = useState([]);
  const [updateInventory, setUpdateInventory] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:8762/charondor/items/inventory-items").then((res)=> {
        setInventory(res.data);
        console.log(res.data)
    })        
}, [updateInventory])


  return (
    <EquipmentContext.Provider
      value={[inventory, setInventory, updateInventory, setUpdateInventory]}
    >
      {props.children}
    </EquipmentContext.Provider>
  );
};
