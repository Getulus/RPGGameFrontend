import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import "./CharacterPage.css";
import { CharacterCollection, CharactersContext } from "./CharacterContext";
import CharacterAttributes from "./Attributes/CharacterAttributes";
import ReactDOM from "react-dom";
import Adventures from "../Adventures/Adventures";
import Equipment from "./Equipment/Equipment";
import QuestPage from "../Quests/QuestPage";
import {
  InventoryCollection,
  InventoryContext,
} from "./Equipment/InventoryContext";
import {
  EquippmentCollection,
  EquippmentContext,
} from "./Equipment/EquippmentContext";
import { CombatLogCollection } from "../Combat/CombatLogContext";
import { QuestCollection } from "../Quests/QuestContext";
import Header from "./Header/Header";
import Shop from "./Shop/Shop";

const CharacterPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  useEffect(() => {
    renderCharacter();
  }, []);

  const [rightSide, setRightSide] = useState("");

  const renderCharacter = () => {
    setRightSide(
      <CharacterCollection>
        <InventoryCollection>
          <Header></Header>
        </InventoryCollection>
        <CharacterAttributes></CharacterAttributes>
      </CharacterCollection>
    );
  };

  const renderAdventures = () => {
    setRightSide(
      <CharacterCollection>
        <CombatLogCollection>
          <InventoryCollection>
            <Header></Header>
          </InventoryCollection>
          <Adventures></Adventures>
        </CombatLogCollection>
      </CharacterCollection>
    );
  };

  const renderEquipment = () => {
    setRightSide(
      <CharacterCollection>
        <InventoryCollection>
          <EquippmentCollection>
            <Header></Header>
            <Equipment></Equipment>
          </EquippmentCollection>
        </InventoryCollection>
      </CharacterCollection>
    );
  };

  const renderQuests = () => {
    setRightSide(
      <CharacterCollection>
        <QuestCollection>
          <InventoryCollection>
            <Header></Header>
          </InventoryCollection>
          <QuestPage></QuestPage>
        </QuestCollection>
      </CharacterCollection>
    );
  };

  const renderShop = () => {
    setRightSide(
      <CharacterCollection>
        <InventoryCollection>
          <Header></Header>
          <Shop></Shop>
        </InventoryCollection>
      </CharacterCollection>
    );
  };

  return (
    <div className="character-page">
      <div className="big-container">
        <div className="grid-container" id="left-container">
          <div onClick={renderCharacter} className="panel">
            {" "}
            Character
          </div>
          <div className="panel" onClick={renderShop}>
            {" "}
            Shop
          </div>
          <div className="panel" onClick={renderEquipment}>
            {" "}
            Equipment
          </div>
          <div className="panel"> Skills</div>
          <div className="panel" onClick={renderAdventures}>
            {" "}
            Adventures
          </div>
          <div className="panel" onClick={renderQuests}>
            {" "}
            Tavern
          </div>
        </div>

        <div id="right-container" className="grid-container">
          {rightSide}
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
