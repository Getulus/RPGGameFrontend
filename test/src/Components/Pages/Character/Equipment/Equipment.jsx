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
import { CharacterContext, CharactersContext } from "../CharacterContext";

const Equipment = () => {
  const [
    inventory,
    setInventory,
    updateInventory,
    setUpdateInventory,
  ] = useContext(InventoryContext);

  const [update, setUpdate] = useContext(CharactersContext);

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
    neck,
    setNeck,
    foot,
    setFoot,
  ] = useContext(EquippmentContext);

  const renderEquipment = () => {
    return (
      <div className="equipment-container">
        <div id="left-hand" className="slot tooltip">
          <div className="tooltiptext">
            {Object.keys(leftHand).map((stat) => sortItemStat(stat, leftHand))}
          </div>
          <img src={leftHand.image} alt=""></img>
        </div>

        <div id="head" className="slot tooltip">
          <img src={head.image}></img>
          <div className="tooltiptext">
            {Object.keys(head).map((stat) => sortItemStat(stat, head))}
          </div>
        </div>

        <div id="right-hand" className="slot tooltip">
          <img src={rightHand.image}></img>
          <div className="tooltiptext">
            {Object.keys(rightHand).map((stat) =>
              sortItemStat(stat, rightHand)
            )}
          </div>
        </div>

        <div id="neck" className="slot tooltip">
          <img src={neck.image}></img>
          <div className="tooltiptext">
            {Object.keys(neck).map((stat) => sortItemStat(stat, neck))}
          </div>
        </div>

        <div id="hands" className="slot tooltip">
          <img src={hands.image}></img>
          <div className="tooltiptext">
            {Object.keys(hands).map((stat) => sortItemStat(stat, hands))}
          </div>
        </div>

        <div id="chest" className="slot tooltip">
          <img src={chest.image}></img>
          <div className="tooltiptext">
            {Object.keys(chest).map((stat) => sortItemStat(stat, chest))}
          </div>
        </div>

        <div id="foot" className="slot tooltip">
          <img src={foot.image}></img>
          <div className="tooltiptext">
            {Object.keys(foot).map((stat) => sortItemStat(stat, foot))}
          </div>
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
  }, []);

  const sortEquippment = (equippment) => {
    for (let item of equippment) {
      switch (item.slot) {
        case "leftHand":
          setLeftHand(item);
          break;
        case "chest":
          setChest(item);
          break;
        case "foot":
          setFoot(item);
          break;
        case "rightHand":
          setRigthHand(item);
          break;
        case "neck":
          setNeck(item);
          break;
        case "head":
          setHead(item);
          break;
        case "gloves":
          setHands(item);
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
    console.log(item);
    if (item.name == "empty slot") {
      return (
        <div className="inventory-slot">
          <img alt="" src={item.image}></img>
        </div>
      );
    } else {
      return (
        <div className="inventory-slot tooltip">
          <div className="tooltiptext">
            {Object.keys(item).map((stat) => sortItemStat(stat, item))}
          </div>
          <img
            alt=""
            src={item.image}
            onClick={() => equipItem(itemId, itemSlot)}
          ></img>
        </div>
      );
    }
  };

  const sortItemStat = (stat, item) => {
    let currentStat = item[stat];
    if (
      currentStat != 0 &&
      stat != "image" &&
      stat != "itemID" &&
      stat != "dropChance" &&
      stat != "rarity" &&
      stat != "equipped"
    ) {
      if (stat != "name" && stat != "slot") {
        return (
          <div>
            {stat}: {currentStat}
          </div>
        );
      }
      return <div style={{ marginBottom: "5px" }}>{currentStat}</div>;
    }
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
