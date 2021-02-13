import React, { useState, useContext, useEffect } from "react";
import { render } from "react-dom";
import { CharactersContext } from "../CharacterContext";
import { InventoryContext } from "../Equipment/InventoryContext";
import "./Shop.css";
import axios from "axios";
import { AttributeImageContext } from "../Attributes/AttributeImagesContext";

const Shop = () => {
  const [attributeImages, setAttributeImages] = useContext(
    AttributeImageContext
  );

  const [
    inventory,
    setInventory,
    updateInventory,
    setUpdateInventory,
  ] = useContext(InventoryContext);

  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const [shopItems, setshopItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8762/charondor/items/get-shop-items")
      .then((res) => {
        console.log(res.data);
        setshopItems(res.data);
      });
  }, [updateInventory]);

  const renderInventory = (item) => {
    let itemId = item.itemID;
    let itemSlot = item.slot;
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
            onClick={() => {
              sellItem(itemId);
            }}
            alt=""
            src={item.image}
          ></img>
        </div>
      );
    }
  };

  const sellItem = (itemId) => {
    axios
      .post("http://localhost:8762/charondor/items/sell-item", {
        itemID: itemId,
      })
      .then((res) => {
        setUpdateInventory(updateInventory + 1);
        setUpdate(update + 1);
      });
  };

  const buyItem = (itemId) => {
    console.log(itemId);
    axios
      .post("http://localhost:8762/charondor/items/buy-item", {
        itemID: itemId,
      })
      .then((res) => {
        setUpdateInventory(updateInventory + 1);
        setUpdate(update + 1);
      });
  };

  const renderShopItems = () => {
    let render = [];

    if (shopItems.length > 0) {
      for (let i = 0; i < 5; i++) {
        if (i <= shopItems.length - 1) {
          let item = shopItems[i];
          render.push(
            <div className="inventory-slot tooltip">
              <div className="tooltiptext">
                {Object.keys(item).map((stat) => sortItemStat(stat, item))}
              </div>
              <img
                onClick={() => {
                  console.log(shopItems);
                  buyItem(item.itemID);
                }}
                alt=""
                src={item.image}
              ></img>
            </div>
          );
        } else {
          render.push(
            <div className="inventory-slot">
              <img alt="" src="/images/inventory-slot.png"></img>
            </div>
          );
        }
      }
    }
    return render;
  };

  const sortItemStat = (stat, item) => {
    let currentStat = item[stat];
    if (
      currentStat != 0 &&
      stat != "image" &&
      stat != "itemID" &&
      stat != "dropChance" &&
      stat != "rarity" &&
      stat != "equipped" &&
      stat != "level"
    ) {
      if (stat != "name" && stat != "slot") {
        return (
          <div style={{marginBottom:"5px"}}>
            <span>
              <img
                alt=""
                className="pictogram tooltip-attr-pic"
                src={attributeImages[stat]}
              ></img>
            </span>
            <span className="tooltip-attr-stat">
              {stat}: {currentStat}{" "}
            </span>
          </div>
        );
      }
      return <div style={{ marginBottom: "5px", textAlign:"center" }}>{currentStat}</div>;
    }
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
