import React, { useState, useContext, useEffect } from "react";
import { CharactersContext } from "../CharacterContext";
import "../Attributes/CharacterAttributesStyle.css";
import axios from "axios";

const CharacterAttributes = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
    playerAttributes,
    setPlayerAttributes,
  ] = useContext(CharactersContext);

  useEffect(() => {
    setUpdate(update + 1);
    console.log(currentPlayer.attributePoints);
  }, []);

  const addAttributePoint = (name) => {
    axios
      .post("http://localhost:8762/charondor/character/player/add-attribute", {
        attributeName: name,
      })
      .then((res) => {
        setUpdate(update + 1);
      });
  };

  return (
    <div className="detail-panel">
      <div className="character-picture">
        <img
          src={currentPlayer.image}
          id="character-img"
          alt="character-image"
        />
      </div>
      <div className="details">
        <div id="general" className="atr-panel">
          <div className="detail-title attr-line">Generals:</div>
          <div className="attr-line">Name: {currentPlayer.name}</div>
          <div className="attr-line">Level: {currentPlayer.level}</div>
          <div className="attr-line">Type: {currentPlayer.type}</div>
          <div className="attr-line">
            <span>Experience: {currentPlayer.experiencePoints}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/XP.png"></img>
            </span>
          </div>

          <div className="attr-line">
            Exp. need for next level:{" "}
            {currentPlayer.experienceNeededForNextLevel}
          </div>
          <div className="attr-line">
            <span>Gold: {currentPlayer.gold}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/gold.png"></img>
            </span>
          </div>
        </div>

        <div id="attributes" className="atr-panel">
          <div className="detail-title attr-line">Attributes:</div>
          <div className="attr-line">
            Health Points: {currentPlayer.maxHealth}
          </div>
          <div className="attr-line">
            <span>
              <img className="pictogram attr" src="/images/strength.png"></img>
            </span>
            <span> Strength: {currentPlayer.strength}</span>
            <span
              onClick={() => addAttributePoint("strength")}
              className="plus"
            >
              {" "}
              +{" "}
            </span>
            <span> ({playerAttributes.strengthPointPrice}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/gold.png"></img>)
            </span>
          </div>
          <div className="attr-line">
            <span>
              <img className="pictogram attr" src="/images/agility.png"></img>
            </span>
            <span> Agility: {currentPlayer.agility}</span>
            <span onClick={() => addAttributePoint("agility")} className="plus">
              {" "}
              +{" "}
            </span>
            <span> ({playerAttributes.agilityPointPrice}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/gold.png"></img>)
            </span>
          </div>
          <div className="attr-line">
            <span>
              <img className="pictogram attr" src="/images/stamina.png"></img>
            </span>
            <span> Stamina: {currentPlayer.stamina}</span>
            <span onClick={() => addAttributePoint("stamina")} className="plus">
              {" "}
              +{" "}
            </span>
            <span> ({playerAttributes.staminaPointPrice}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/gold.png"></img>)
            </span>
          </div>
          <div className="attr-line">
            <span>
              <img className="pictogram attr" src="/images/wisdom.png"></img>
            </span>
            <span> Wisdom: {currentPlayer.wisdom}</span>
            <span onClick={() => addAttributePoint("wisdom")} className="plus">
              {" "}
              +{" "}
            </span>
            <span> ({playerAttributes.wisdomPointPrice}</span>
            <span>
              {"  "}
              <img className="pictogram" src="/images/gold.png"></img>)
            </span>
          </div>
        </div>

        <div id="combat-stat" className="atr-panel">
          <div className="detail-title attr-line">Combat Stats:</div>
          <div className="attr-line">
            <span>Attack Value: {currentPlayer.attackValue}</span>
            <span>
              {"  "}
              <img className="pictogram attr" src="/images/attack.png" alt="" />
            </span>
          </div>
          <div className="attr-line">
            Defense Value: {currentPlayer.defenseValue}
            <span>
              {"  "}
              <img
                className="pictogram attr"
                src="/images/defense.png"
                alt=""
              />
            </span>
          </div>
          <div className="attr-line">
            Critical chance: {currentPlayer.criticalChance} %
            <span>
              {"  "}
              <img
                className="pictogram attr"
                src="/images/critical.png"
                alt=""
              />
            </span>
          </div>
          <div className="attr-line">
            Armor: {currentPlayer.armor}
            <span>
              {"  "}
              <img
                className="pictogram attr"
                src="/images/chest.png"
                alt=""
              />
            </span>
          </div>
          <div className="attr-line">
            Magic Resistance: {currentPlayer.magicResistance}
            <span>
              {"  "}
              <img
                className="pictogram attr"
                src="/images/magicres.png"
                alt=""
              />
            </span>
          </div>
        </div>

        <div className="atr-panel">
          <img id="type-icon" alt="type" src={currentPlayer.classSymbol}></img>
        </div>
      </div>
    </div>
  );
};

export default CharacterAttributes;
