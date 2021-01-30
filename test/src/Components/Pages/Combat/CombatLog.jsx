import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CombatLogContext } from "./CombatLogContext";
import { CharactersContext } from "../Character/CharacterContext";

const CombatLog = () => {
  const [combatLog, setCombatLog, logUpdate, setLogUpdate] = useContext(
    CombatLogContext
  );

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
    axios.get("http://localhost:8762/charondor/items/get-loot").then((res) => {
      setLoot(res.data);
    }).then(()=>{
      axios.post("http://localhost:8762/charondor/items/clear-loot")
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
    <div className="loot-item">
      <img src={item.image}></img>
    </div>
    )
  };

  return (
    <div>
      <p>Combat Log: </p>
      {combatLog.map((logData) => renderCombatLogs(logData))}
        <p>Loot: </p>
        <div className="loot-container">
          {loot.map((item) => renderLootedItems(item))}
        </div>
    </div>
  );
};

export default CombatLog;
