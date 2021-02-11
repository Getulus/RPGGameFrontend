import React, { useState, useContext, useEffect } from "react";
import { render } from "react-dom";
import { CharactersContext } from "../CharacterContext";
import { InventoryContext } from "../Equipment/InventoryContext";
import "./Shop.css";
import axios from "axios";

const Shop = () => {
  const [
    inventory,
    setInventory,
    updateInventory,
    setUpdateInventory,
  ] = useContext(InventoryContext);

  const [shopItems, setshopItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8762/charondor/items/get-shop-items")
      .then((res) => {
        console.log(res.data)
        setshopItems(res.data);
      });
  }, []);

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
          <img alt="" src={item.image}></img>
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

  const renderShopItems = () => {
    let render = [];

    if (shopItems.length > 0) {
      for (let i = 0; i < 5; i++) {
        let item = shopItems[i];
        render.push(
          <div className="inventory-slot tooltip">
            <div className="tooltiptext">
              {Object.keys(item).map((stat) => sortItemStat(stat, item))}
            </div>
            <img alt="" src={item.image}></img>
          </div>
        );
      }
    }
    return render;
  };

  return (
    <div className="equipment-main-container">
      <div className="title">Shop</div>
      <div className="title">Inventory</div>
      <div className="shop">
        <img className="shop-image" src="/images/shop-01.png"></img>
        <div className="shop-goods">{renderShopItems()}</div>
      </div>
      <div className="inventory-container">
        {inventory.map((item) => renderInventory(item))}
      </div>
    </div>
  );
};

export default Shop;
