import React, {  useContext } from "react";
import {

  CharactersContext,
} from "../Character/CharacterContext";


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
    <div className="combat-monster-stats">
    <p>Monster Info: </p>
      <p className="stat">Level: {currentMonster.level}</p>
      <p className="stat">Current Health: {currentMonster.currentHealth}</p>
      <p className="stat">Attack Value: {currentMonster.attackValue}</p>
      <p className="stat">Defense Value: {currentMonster.defenseValue}</p>
      <p className="stat">Critical Chance: {currentMonster.criticalChance}%</p>
    </div>
  );
};

export default CombatPlayerStats;