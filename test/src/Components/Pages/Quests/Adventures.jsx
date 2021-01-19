import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../Character/CharacterContext";
import "./AdventuresStyle.css";
import { Link } from "react-router-dom";
import forestImg from "../../../Img/forest.jpg";
import devilsPitImg from "../../../Img/devilspit.jpeg";
import lionsHighlandImg from "../../../Img/lionshighland.jpeg";
import ogresLandImg from "../../../Img/ogresland.png";
import spiderCaveImg from "../../../Img/spidercave.jpeg";
import towerOfSufferingImg from "../../../Img/towerofsuffering.jpeg";
import axios from "axios";

const Adventures = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
  ] = useContext(CharactersContext);

  const setAdventure = (name) => {
    axios
      .post(`http://localhost:8762/charondor/adventure/set-adventure`, {
        name: name,
      })
      .then(() => {
        axios
          .get("http://localhost:8762/charondor/action/combat")
          .then((res) => {})
      });
  };

  return (
    <div className="adventure-container">
      <div className="adventure-panel">
        <p className="adv-title">Misty Forest 1-3</p>
        <Link to="/combat">
          <img
            onClick={() => setAdventure("Misty Forest")}
            src={forestImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Spider Cave 2-4</p>
        <img src={spiderCaveImg} alt="adv-img" className="adv-img"></img>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Land of Ogres 3-6</p>
        <img src={ogresLandImg} alt="adv-img" className="adv-img"></img>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Lion's Highland 5-8</p>
        <img src={lionsHighlandImg} alt="adv-img" className="adv-img"></img>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Tower of Suffering 7-9</p>
        <img src={towerOfSufferingImg} alt="adv-img" className="adv-img"></img>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Devil's Pit 10</p>
        <img src={devilsPitImg} alt="adv-img" className="adv-img"></img>
      </div>
    </div>
  );
};

export default Adventures;
