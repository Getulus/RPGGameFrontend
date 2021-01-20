import "./EquipmentStyle.css";
import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { InventoryContext } from "./InventoryContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { EquippmentContext } from "./EquippmentContext";

const Equipment = () => {
  const [
    inventory,
    setInventory,
    updateInventory,
    setUpdateInventory,
  ] = useContext(InventoryContext);

  const [
    leftHand,
    setLeftHand,
    rightHand,
    setRigthHand,
    head,
    setHead,
    chest,
    setChest,
    hands,
    setHands,
    legs,
    setLegs,
    foot,
    setFoot,
  ] = useContext(EquippmentContext);

  const renderEquipment = () => {
    return (
      <div className="equipment-container">
        <div id="left-hand" className="slot">
          <img src={leftHand} alt=""></img>
        </div>
        <div id="head" className="slot">
          <img src={head}></img>
        </div>
        <div id="right-hand" className="slot">
          <img src={rightHand}></img>
        </div>
        <div id="chest" className="slot">
          <img src={chest}></img>
        </div>
        <div id="hands" className="slot">
          <img src={hands}></img>
        </div>
        <div id="legs" className="slot">
          <img src={legs}></img>
        </div>
        <div id="foot" className="slot">
          <img src={foot}></img>
        </div>
      </div>
    );
  };

  useEffect(() => {
    axios
    .get("http://localhost:8762/charondor/items/equipped-items")
    .then((res) => {
      sortEquippment(res.data);
    });
  }, [])

  const sortEquippment = (equippment) => {
    for (let item of equippment) {
      switch (item.slot) {
        case "Hands":
          setLeftHand(item.image);
          break;
          case "chest":
            setChest(item.image);
            break;
        default:
          break;
      }
    }
  };

  const equipItem = (id, itemSlot) => {
    if (id > 0) {
      axios
        .post(`http://localhost:8762/charondor/items/equip`, {
          id: id,
          slot: itemSlot,
        })
        .then(() => {
          axios
            .get("http://localhost:8762/charondor/items/equipped-items")
            .then((res) => {
              sortEquippment(res.data);
            });
          setUpdateInventory(updateInventory + 1);
          inventory.map((item) => renderInventory(item));
        });
    }
  };

  const renderInventory = (item) => {
    let itemId = item.itemID;
    let itemSlot = item.slot;
    console.log(itemId);
    return (
      <div className="inventory-slot">
        <img
          alt=""
          src={item.image}
          onClick={() => equipItem(itemId, itemSlot)}
        ></img>
      </div>
    );
  };

  return (
    <div className="equipment-main-container">
      <p className="title">Equipment</p>
      <p className="title">Inventory</p>
      {renderEquipment()}
      <div className="inventory-container">
        {inventory.map((item) => renderInventory(item))}
      </div>
    </div>
  );
};

export default Equipment;
