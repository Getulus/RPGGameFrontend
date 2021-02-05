import React, { useState, useContext, useEffect } from "react";
import "./CharacterPage.css";
import { CharacterCollection, CharactersContext } from "./CharacterContext";
import CharacterAttributes from "./Attributes/CharacterAttributes";
import ReactDOM from "react-dom";


const CharacterPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
  ] = useContext(CharactersContext);


  useEffect(()=>{
    renderRightSide();
  },[])
  

  const renderRightSide = () => {
    ReactDOM.render(
      <CharacterCollection>
          <CharacterAttributes></CharacterAttributes>
      </CharacterCollection>,
      document.getElementById("right-container")
    );
  };


  return (
    <div className="character-page">
      <div className="big-container">
        <div className="grid-container" id="left-container">
          <div onClick={renderRightSide} className="panel">
            {" "}
            Character
          </div>
          <div className="panel"> Inventory</div>
          <div className="panel"> Equipment</div>
          <div className="panel"> Skills</div>
          <div className="panel"> Quests</div>
        </div>
        <div id="right-container" className="grid-container">

        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
