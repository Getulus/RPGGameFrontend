import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "./CombatLogContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
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

  const history = useHistory();

  useEffect(() => {
    setLogUpdate(logUpdate + 1);
  }, []);

  const startCombat = () => {
    axios.get(`http://localhost:8762/charondor/action/combat`).then(() => {
      setUpdate(update + 1);
      setLogUpdate(logUpdate + 1);
    });

    if (currentPlayer.currentHealth <= 0) {
      regenerate();
    }
  };

  const regenerate = () => {
    history.push("/character");
    axios
      .get("http://localhost:8762/charondor/character/regenerate")
      .then((res) => {});
  };

  return (
    <div className="combat-page">
      <div className="combat-container">
        <div id="player-image" className="combat-panel image">
          <p className="character-name">{currentPlayer.name}</p>
          <img src={currentPlayer.image}></img>
        </div>
        <div id="monster-image" className="combat-panel image">
          <p className="character-name">{currentMonster.name}</p>
          <img src={currentMonster.image}></img>
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
      <button className="button" onClick={() => startCombat()}>
        Start Combat
      </button>
      <button className="button" onClick={() => regenerate()}>
        End Combat
      </button>
    </div>
  );
};

export default CombatPage;
