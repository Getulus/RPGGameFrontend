import React, { useState, useContext, useEffect } from "react";
import { render } from "react-dom";
import { CharactersContext } from "../CharacterContext";
import "./HeaderStyle.css";

const Header = () => {

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


  useEffect(()=>{
    console.log(currentPlayer.gold)
  },[currentPlayer])

  return (
    <div className="header">
      <span className="header-info">
        <span>{currentPlayer.type} </span>
        <span>
           <img src={currentPlayer.classSymbol} className="pictogram"></img>
        </span>
      </span>

      <span className="header-info">
        <span>{currentPlayer.name}</span>
      </span>

      <span className="header-info">
        <span>LVL {currentPlayer.level}</span>
      </span>

      <span className="header-info">
        <span>
          {currentPlayer.experienceNeededForNextLevel} /{" "}
          {currentPlayer.experiencePoints}{" "}
        </span>
        <span>
          <img src="/images/XP.png" className="pictogram"></img>
        </span>
      </span>

      <span className="header-info">
        <span>{currentPlayer.gold} </span>
        <span>
          <img src="/images/gold.png" className="pictogram"></img>
        </span>
      </span>

      <span className="header-info">
        <span>25 / {currentPlayer.items.length} </span>
        <span>
          <img src="/images/inventory-slot.png" className="pictogram"></img>
        </span>
      </span>
    </div>
  );
};

export default Header;
