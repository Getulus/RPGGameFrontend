import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "./CombatLogContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import CombatPlayerStats from "./CombatPlayerStats";
import CombatMonsterStats from "./CombatMonsterStats";
import CombatLog from "./CombatLog";


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

  const [hideCombatPanel, setHideCombatPanel] = useState("none");
  const [startAdventure, setStartAdventure] = useState("Start Adventure");
  const [hideButton, setHideButton] = useState("inline");

  const history = useHistory();

  useEffect(() => {
    setUpdate(update + 1);
  }, []);

  const startCombat = () => {
    setHideCombatPanel("grid");
    setStartAdventure("Continue");
    if (currentPlayer.currentHealth <= 0) {
      setHideButton("none")
      regenerate();
    } else {
      axios.get(`http://localhost:8762/charondor/action/combat`).then(() => {
        setLogUpdate(logUpdate + 1);
        setUpdate(update + 1);
      });
    }
  };

  const regenerate = () => {
    axios
      .get("http://localhost:8762/charondor/character/regenerate")
      .then((res) => {});

    axios
      .post("http://localhost:8762/charondor/adventure/clear-adventure")
      .then((res) => {});

    axios
      .post("http://localhost:8762/charondor/action/clear-combat-log")
      .then((res) => {
        setLogUpdate(logUpdate + 1);
      });
  };

  return (
    <div className="combat-page">
      <div style={{ display: hideCombatPanel }} className="combat-container">
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

      <button
        style={{ display: hideButton }}
        className="button"
        onClick={() => startCombat()}
      >
        {startAdventure}
      </button>

      <Link to="/character">
        <button className="button" onClick={() => regenerate()}>
          End Combat
        </button>
      </Link>
    </div>
  );
};

export default CombatPage;
