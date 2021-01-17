import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import {
  CharacterCollection,
  CharactersContext,
} from "../Character/CharacterContext";
import axios from 'axios';

const CombatPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate
  ] = useContext(CharactersContext);


  const startCombat = () => {
    axios.get(`http://localhost:8762/charondor/action/combat`).then(() => {
        setUpdate(update + 1)
      });
  }


  return (
    <div className="combat-page">
      <div className="combat-container">
        <div id="player-image" className="combat-panel image">
          Player Image
        </div>
        <div id="monster-image" className="combat-panel image">
          Monster Image
        </div>
        <div id="player-stats" className="combat-panel info">
          Player Info
        </div>
        <div id="monster-stats" className="combat-panel info">
          Monster Info
        </div>
        <div id="battle-log" className="combat-panel">
          Battle Log
        </div>
      </div>
      <button className="button" onClick={startCombat}>Start Combat</button>
      <a href="/character">
        <button className="button">End Combat</button>
      </a>
    </div>
  );
};

export default CombatPage;
