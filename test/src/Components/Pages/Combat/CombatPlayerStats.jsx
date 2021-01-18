import React, { useState, useContext, useEffect } from "react";
import {
  CharacterCollection,
  CharactersContext,
} from "../Character/CharacterContext";
import axios from "axios";


const CombatPlayerStats = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  return (
    <div className="combat-player-stats">
    <p>Player Info: </p>
      <p className="stat">Level: {currentPlayer.level}</p>
      <p className="stat">Current Health: {currentPlayer.currentHealth}</p>
      <p className="stat">Attack Value: {currentPlayer.attackValue}</p>
      <p className="stat">Defense Value: {currentPlayer.defenseValue}</p>
      <p className="stat">Critical Chance: {currentPlayer.criticalChance}%</p>
    </div>
  );
};

export default CombatPlayerStats;
