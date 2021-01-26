import React, { useState, useContext, useEffect } from "react";
import { CharactersContext } from "../CharacterContext";
import warriorIcon from "../../../../Img/warrioricon.jpg";
import "../Attributes/CharacterAttributesStyle.css";


const CharacterAttributes = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate
  ] = useContext(CharactersContext);


  useEffect(()=>{
    setUpdate(update + 1)
  },[])

  return (
    <div className="detail-panel">
      <div className="character-picture">
        <img src="/images/druid.png" id="character-img" alt="character-image" />
      </div>
      <div className="details">
        <div id="general" className="atr-panel">
          <p className="detail-title">Generals:</p>
          <p>Name: {currentPlayer.name}</p>
          <p>Level: {currentPlayer.level}</p>
          <p>Type: {currentPlayer.type}</p>
          <p>Experience: {currentPlayer.experiencePoints}</p>
          <p>
            Exp. need for next level:{" "}
            {currentPlayer.experienceNeededForNextLevel}
          </p>
          <p>Gold: {currentPlayer.gold}</p>
        </div>

        <div id="attributes" className="atr-panel">
          <p className="detail-title">Attributes:</p>
          <p>Health Points: {currentPlayer.maxHealth}</p>
          <p>Strength: {currentPlayer.strength}</p>
          <p>Agility: {currentPlayer.agility}</p>
          <p>Stamina: {currentPlayer.stamina}</p>
          <p>Wisdom: {currentPlayer.wisdom}</p>
        </div>

        <div id="combat-stat" className="atr-panel">
          <p className="detail-title">Combat Stats:</p>
          <p>Attack Value: {currentPlayer.attackValue}</p>
          <p>Defense Value: {currentPlayer.defenseValue}</p>
          <p>Critical chance: {currentPlayer.criticalChance} %</p>
          <p>Armor: {currentPlayer.armor}</p>
          <p>Magic Resistance: {currentPlayer.magicResistance}</p>
        </div>

        <div className="atr-panel">
          <img id="type-icon" alt="type" src={warriorIcon}></img>
        </div>
      </div>
    </div>
  );
};

export default CharacterAttributes;
