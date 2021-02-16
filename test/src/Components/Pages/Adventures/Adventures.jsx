import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "../Combat/CombatLogContext";

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
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const [logUpdate, setLogUpdate] = useContext(CombatLogContext);

  const setAdventure = (name) => {
    axios
      .post(`http://localhost:8762/charondor/adventure/set-adventure`, {
        name: name,
      })
      .then((res) => {
        setUpdate(update + 1)
        console.log(currentMonster);
      })
  };

  return (
    <div className="adventure-container">
      <div className="adventure-panel">
        <p className="adv-title">Misty Forest 1-2</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Misty Forest")}
            src={forestImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Spider Cave 3-4</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Spider Cave")}
            src={spiderCaveImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Land of Ogres 4-6</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Land of Ogres")}
            src={ogresLandImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Lion's Highland 5-8</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Lion's Highland")}
            src={lionsHighlandImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Tower of Suffering 7-9</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Tower of Suffering")}
            src={towerOfSufferingImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>

      <div className="adventure-panel">
        <p className="adv-title">Devil's Pit 10</p>
        <Link to="/battle">
          <img
            onClick={() => setAdventure("Devil's Pit")}
            src={devilsPitImg}
            alt="adv-img"
            className="adv-img"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Adventures;
