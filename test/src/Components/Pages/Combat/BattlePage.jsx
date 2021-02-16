import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "./CombatLogContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import CombatPlayerStats from "./CombatPlayerStats";
import CombatMonsterStats from "./CombatMonsterStats";
import CombatLog from "./CombatLog";
import useSound from "use-sound";
import dmgSound from "../../../sounds/damage.mp3";
import Skills from "../Character/Skills/Skill";

const BattlePage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const [combatLog, setCombatLog, logUpdate, setLogUpdate] = useContext(
    CombatLogContext
  );

  const [playerBattleHealthBar, setPLayerBattleHealthBar] = useState("100%");
  const [monsterBattleHealthBar, setMonsterBattleHealthBar] = useState("100%");

  useEffect(() => {
    setPLayerBattleHealthBar(
      Math.round(
        (currentPlayer.currentHealth / currentPlayer.maxHealth) * 100
      ) + "%"
    );
    
  }, [currentPlayer]);


  useEffect(()=>{
    setUpdate(update + 1)
  },[])

  const startCombat = () => {
    if (currentPlayer.currentHealth <= 0) {
      console.log("REGENERATE")
      regenerate();
    } else {
      axios.get(`http://localhost:8762/charondor/action/combat`).then((res) => {
        console.log(currentMonster);
        setUpdate(update + 1)
        setLogUpdate(logUpdate + 1)
      });
    }
  };

  const regenerate = () => {
    axios
      .get("http://localhost:8762/charondor/character/regenerate").then((res)=>{})
      

    axios
      .post("http://localhost:8762/charondor/adventure/clear-adventure").then((res)=>{})
      

    axios
      .post("http://localhost:8762/charondor/action/clear-combat-log")
      .then((res) => {
        setLogUpdate(logUpdate + 1);
      });
  };

  return (
    <div className="combat-page">
      <div className="combat-container">
        <div id="player-image" className="combat-panel image">
          <p className="character-name">{currentPlayer.name}</p>
          <img src={currentPlayer.image}></img>

          <div className="w3-black">
            <div
              className="w3-red w3-center"
              style={{ height: "20px", width: playerBattleHealthBar }}
            >
              {playerBattleHealthBar}
            </div>
          </div>
        </div>

        <div id="monster-image" className="combat-panel image">
          <p className="character-name">{currentMonster.name}</p>
          <img src={currentMonster.image}></img>
          <div className="w3-black">
            <div
              className="w3-red"
              style={{ height: "20px", width: monsterBattleHealthBar }}
            >
              {monsterBattleHealthBar}
            </div>
          </div>
        </div>

        <Skills></Skills>

        <div id="player-stats" className="combat-panel info">
          <CombatPlayerStats></CombatPlayerStats>
        </div>

        <div id="monster-stats" className="combat-panel info">
          <CombatMonsterStats></CombatMonsterStats>
        </div>
      </div>
      <Link to="/combat">
        <button className="button" onClick={() => startCombat()}>
          Start Combat
        </button>
      </Link>
    </div>
  );
};

export default BattlePage;
