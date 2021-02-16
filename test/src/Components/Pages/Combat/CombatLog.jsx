import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CombatLogContext } from "./CombatLogContext";
import { CharactersContext } from "../Character/CharacterContext";
import {AttributeImageContext} from "../Character/Attributes/AttributeImagesContext"

const CombatLog = () => {
  const [attributeImages, setAttributeImages] = useContext(
    AttributeImageContext
  );

  const [combatLog, setCombatLog, logUpdate, setLogUpdate] = useContext(
    CombatLogContext
  );
  const [basicLoot, setBasicLoot] = useState("No loot");
  const [loot, setLoot] = useState([]);

  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  useEffect(() => {
    
    checkIfHasBasicLoot();
  }, [combatLog]);

  useEffect(() => {
    axios
      .get("http://localhost:8762/charondor/items/get-loot")
      .then((res) => {
        setLoot(res.data);
      })
      .then(() => {
        axios.post("http://localhost:8762/charondor/items/clear-loot").then((res)=>{});
      });
  }, [currentPlayer]);

  const renderCombatLogs = (logData) => {
    return (
      <div className="log-blokk">
        <p className="stat">Round: {logData.numberOfRound}</p>
        <p className="stat">Attacker: {logData.name}</p>
        <p className="stat">Damage: {logData.damageDealt}</p>
        <p className="stat">
          Defender Remaning Health: {logData.enemyRemainingHealth}
        </p>
      </div>
    );
  };

  const renderLootedItems = (item) => {
    return (
      <div className="loot-item tooltip">
        <div
          className="tooltiptext"
          style={{ top: "105%", left: "50%", marginLeft: "-80px" }}
        >
          {Object.keys(item).map((stat) => sortItemStat(stat, item))}
        </div>
        <img src={item.image}></img>
      </div>
    );
  };

  const checkIfHasBasicLoot = () => {
    if (combatLog.length > 0) {
      if (combatLog[combatLog.length - 1]["name"] == "Monster") {
        setBasicLoot(<p>No loot</p>);
      } else {
        setBasicLoot(
          <div className="basic-loot">
            <p>Loot: </p>
            <div>Gold: {currentMonster.lootedGold}</div>
            <div>Experience: {currentMonster.experience}</div>
          </div>
        );
      }
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
      return <div style={{ marginBottom: "5px", textAlign:"center"  }}>{currentStat}</div>;
    }
  };

  return (
    <div>
      <div className="loot">
        {basicLoot}
        <div className="loot-container">
          {loot.map((item) => renderLootedItems(item))}
        </div>
      </div>

      <p>Combat Log: </p>
      {combatLog.map((logData) => renderCombatLogs(logData))}
    </div>
  );
};

export default CombatLog;
