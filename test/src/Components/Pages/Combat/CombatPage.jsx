import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "./CombatLogContext";
import axios from "axios";
import { Link } from "react-router-dom";
import CombatPlayerStats from "./CombatPlayerStats";
import CombatMonsterStats from "./CombatMonsterStats";
import CombatLog from "./CombatLog";
import werewolf from "../../../Img/werewolf.jpeg";
import warrior from "../../../Img/warrior.png";

const CombatPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const [combatLog, setCombatLog, logUpdate, setLogUpdate] = useContext(
    CombatLogContext
  );

  const startCombat = () => {
    axios.get(`http://localhost:8762/charondor/action/combat`).then(() => {
      setUpdate(update + 1);
      setLogUpdate(logUpdate + 1);
      console.log(update, logUpdate);
    });
  };

  return (
    <div className="combat-page">
      <div className="combat-container">
        <div id="player-image" className="combat-panel image">
          <img src={warrior}></img>
        </div>
        <div id="monster-image" className="combat-panel image">
          <img src={werewolf}></img>
        </div>
        <div id="player-stats" className="combat-panel info">
          <CombatPlayerStats></CombatPlayerStats>
        </div>
        <div id="monster-stats" className="combat-panel info">
          <CombatMonsterStats></CombatMonsterStats>
        </div>
        <div id="battle-log" className="combat-panel">
          <CombatLog></CombatLog>
        </div>
      </div>
      <button className="button" onClick={startCombat}>
        Start Combat
      </button>
      <Link to="/character">
        <button className="button">End Combat</button>
      </Link>
    </div>
  );
};

export default CombatPage;
