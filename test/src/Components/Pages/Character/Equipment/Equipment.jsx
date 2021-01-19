import "./EquipmentStyle.css";
import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../../Character/CharacterContext";
import { Link } from "react-router-dom";
import axios from "axios";



const Equipment = () => {
  const [leftHand, setLeftHand] = useState("");

  const renderEquipment = () => {
    return (
      <div className="equipment-container">
        <div id="left-hand" className="slot">
          <img src="https://gbf.wiki/images/thumb/1/15/Weapon_b_1030004300.png/462px-Weapon_b_1030004300.png" alt=""></img>
        </div>
        <div id="head" className="slot">
            <img src="https://i.pinimg.com/originals/73/5a/20/735a20b5d4b1794a798f93b8a575f674.png"></img>
        </div>
        <div id="right-hand" className="slot">
            <img src="https://i.pinimg.com/originals/18/93/c2/1893c271a8833f4e7036707935e7f30f.png"></img>
        </div>
        <div id="chest" className="slot">
            <img src="https://i.pinimg.com/originals/aa/9e/7c/aa9e7c0e31b863f17fd5d5d6d4367a96.png"></img>
        </div>
        <div id="hand" className="slot">
            <img src="https://gbf.wiki/images/thumb/c/ca/Weapon_b_1030606400.png/462px-Weapon_b_1030606400.png"></img>
        </div>
        <div id="legs" className="slot">
            <img src="https://mcishop.azureedge.net/mciassets/w_4_0076666_gawain-greaves_550.png"></img>
        </div>
        <div id="foot" className="slot">
            <img src="https://www.tosbase.com/content/img/icons/items/icon_item_boots_knight.png"></img>
        </div>
      </div>
    );
  };

  return (
    <div className="equipment-main-container">
      {renderEquipment()}
      <div className="inventory-container">
        <div className="inventory-slot"></div>
      </div>
    </div>
  );
};

export default Equipment;
