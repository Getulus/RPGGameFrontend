import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";

import { Link } from "react-router-dom";
import "./ChooseClassStyle.css";
import axios from "axios";

const ChooseClass = () => {
  const [modalDisplay, setMondalDisplay] = useState("none");
  const [playerName, setPlayername] = useState("Player Name");

  const chooseClass = (type) => {
    setMondalDisplay("block");
    axios
      .post(`http://localhost:8762/charondor/character/choose-character`, {
        type: type,
      })
      .then((res) => {});
  };

  const giveName = (e) => {
    setPlayername(e.target.value);
  };

  const setCurrentPlayerName = () => {
    axios
      .post(`http://localhost:8762/charondor/character/change-name`, {
        name: playerName,
      })
      .then((res) => {});
  };

  return (
    <div className="choose-main">
      <div className="page-overlay">
        <div id="myModal" className="modal" style={{ display: modalDisplay }}>
          <div className="modal-content">
            <span onClick={() => setMondalDisplay("none")} className="close">
              &times;
            </span>
            <input value={playerName} onChange={giveName}></input>
            <Link to="/character">
              <button className="saveButton" onClick={setCurrentPlayerName}>Create</button>
            </Link>
          </div>
        </div>

        <div id="choose-title" className="title">
          Choose a character
        </div>
        <div className="class-container">
          <div className="flip-card" onClick={() => chooseClass("Warrior")}>
            <div className="flip-card-inner">
              <div id="warrior" className="class-card flip-card-front"></div>
              <div
                id="warrior-sign"
                className="class-card flip-card-back"
              ></div>
            </div>
          </div>

            <div className="flip-card" onClick={() => chooseClass("Druid")}>
              <div className="flip-card-inner">
                <div id="druid" className="class-card flip-card-front"></div>
                <div
                  id="druid-sign"
                  className="class-card flip-card-back"
                ></div>
              </div>
            </div>

            <div className="flip-card" onClick={() => chooseClass("Wizard")}>
              <div className="flip-card-inner">
                <div id="wizard" className="class-card flip-card-front"></div>
                <div
                  id="wizard-sign"
                  className="class-card flip-card-back"
                ></div>
              </div>
            </div>

            <div
              className="flip-card"
              onClick={() => chooseClass("Shadow Striker")}
            >
              <div className="flip-card-inner">
                <div id="striker" className="class-card flip-card-front"></div>
                <div
                  id="striker-sign"
                  className="class-card flip-card-back"
                ></div>
              </div>
            </div>

            <div
              className="flip-card"
              onClick={() => chooseClass("Necromancer")}
            >
              <div className="flip-card-inner">
                <div
                  id="necromancer"
                  className="class-card flip-card-front"
                ></div>
                <div
                  id="necromancer-sign"
                  className="class-card flip-card-back"
                ></div>
              </div>
            </div>

            <div
              className="flip-card"
              onClick={() => chooseClass("Trap Master")}
            >
              <div className="flip-card-inner">
                <div
                  id="trap-master"
                  className="class-card flip-card-front"
                ></div>
                <div
                  id="trap-master-sign"
                  className="class-card flip-card-back"
                ></div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseClass;
