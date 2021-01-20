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
import Adventures from "../Quests/Adventures";
import Equipment from "./Equipment/Equipment";
import { EquipmentCollection ,EquipmentContext } from "./Equipment/EquipmnetContext";

const CharacterPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
  ] = useContext(CharactersContext);

  useEffect(() => {
    renderCharacter();
  }, []);

  const [rightSide, setRightSide] = useState("");

  const renderCharacter = () => {
    setRightSide(
      <CharacterCollection>
        <CharacterAttributes></CharacterAttributes>
      </CharacterCollection>
    );
  };

  const renderAdventures = () => {
    setRightSide(
      <CharacterCollection>
        <Adventures></Adventures>
      </CharacterCollection>
    );
  };

  const renderEquipment = () => {
    setRightSide(
      <CharacterCollection>
        <EquipmentCollection>
          <Equipment></Equipment>
        </EquipmentCollection>
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
          <div className="panel"> Shop</div>
          <div className="panel" onClick={renderEquipment}>
            {" "}
            Equipment
          </div>
          <div className="panel"> Skills</div>
          <div className="panel" onClick={renderAdventures}>
            {" "}
            Adventures
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
