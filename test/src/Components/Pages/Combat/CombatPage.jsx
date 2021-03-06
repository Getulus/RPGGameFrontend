import React, { useState, useContext, useEffect } from "react";
import "./CombatPageStyle.css";
import { CharactersContext } from "../Character/CharacterContext";
import { CombatLogContext } from "./CombatLogContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import CombatPlayerStats from "./CombatPlayerStats";
import CombatMonsterStats from "./CombatMonsterStats";
import CombatLog from "./CombatLog";
import useSound from 'use-sound';
import dmgSound from "../../../sounds/damage.mp3"

const CombatPage = () => {
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

  const [hideCombatPanel, setHideCombatPanel] = useState("none");
  const [startAdventure, setStartAdventure] = useState("Start Adventure");
  const [hideButton, setHideButton] = useState("inline");
  const [playerHealthBar, setPLayerHealthBar] = useState("100%");
  const [monsterHealthBar, setMonsterHealthBar] = useState("100%");

  //Damage dealing
  const [playerDamage, setPLayerDamage] = useState("");
  const [monsterDamage, setMonsterDamage] = useState("");
  const [playerDamageHide, setPlayerDamageHide] = useState("none");
  const [monsterDamageHide, setMonsterDamageHide] = useState("none");

  //Sound

  const [play] = useSound(dmgSound)

  const history = useHistory();

  useEffect(() => {
    setUpdate(update + 1);
  }, []);

  useEffect(() => {
    moveBarAnimation();
    setMonsterHealthBar("100%");
  }, [currentMonster]);

  const calculateMonsterHealthBar = (currentHealth, round) => {
    if (currentHealth <= 0) {
      setMonsterHealthBar("0%");
    } else {
      console.log(currentMonster.maxHealth)
      console.log(Math.round((currentHealth / currentMonster.maxHealth) * 100) + "%")
      setMonsterHealthBar(
        Math.round((currentHealth / currentMonster.maxHealth) * 100) + "%"
      );
    }
  };

  const calculatePlayerHealthBar = (currentHealth) => {
    if (currentHealth <= 0) {
      setPLayerHealthBar("0%");
    } else {
      setPLayerHealthBar(
        Math.round((currentHealth / currentPlayer.maxHealth) * 100) + "%"
      );
    }
  };

  const moveBarAnimation = () => {
    var round = 0;
    var id = setInterval(frame, 800);

    function frame() {
      if (round >= combatLog.length) {
        setPlayerDamageHide("none");
        setMonsterDamageHide("none");
        setHideButton("inline");
        clearInterval(id);
        
      } else {
        console.log(combatLog[round]);
        if (combatLog[round]["name"] == "Player") {
          setPlayerDamageHide("inline");
          setMonsterDamageHide("none");
          setPLayerDamage(combatLog[round]["damageDealt"]);
          calculateMonsterHealthBar(combatLog[round]["enemyRemainingHealth"], round);
          play()
        } else {
          setPlayerDamageHide("none");
          setMonsterDamageHide("inline");
          setMonsterDamage(combatLog[round]["damageDealt"]);
          calculatePlayerHealthBar(combatLog[round]["enemyRemainingHealth"]);
          play()
        }
        round++;
      }
    }
  };

  const startCombat = () => {
    setHideButton("none");
    setHideCombatPanel("grid");
    setStartAdventure("Continue");

    if (currentPlayer.currentHealth <= 0) {
      setHideButton("none");
      regenerate();
    } else {
      axios.get(`http://localhost:8762/charondor/action/combat`).then(() => {
        setLogUpdate(logUpdate + 1);
        setUpdate(update + 1);
      });
    }
  };

  const regenerate = () => {
    axios
      .get("http://localhost:8762/charondor/character/regenerate")
      .then((res) => {});

    axios
      .post("http://localhost:8762/charondor/adventure/clear-adventure")
      .then((res) => {});

    axios
      .post("http://localhost:8762/charondor/action/clear-combat-log")
      .then((res) => {
        setLogUpdate(logUpdate + 1);
      });
      
  };

  return (
    <div className="combat-page">
      <div style={{ display: hideCombatPanel }} className="combat-container">
        <div id="player-image" className="combat-panel image">
          <p className="character-name">{currentPlayer.name}</p>
          <img src={currentPlayer.image}></img>
          <div className="textContainer" style={{display:monsterDamageHide}}>
            <img
              src={"/images/damage.png"}
              className="damage"
              style={{ display: "inline" }}
            ></img>
            <div className="dmgNum">{monsterDamage}</div>
          </div>

          <div class="w3-black">
            <div
              class="w3-red w3-center"
              style={{ height: "20px", width: playerHealthBar }}
            >
              {playerHealthBar}
            </div>
          </div>
        </div>

        <div id="monster-image" className="combat-panel image">
          <p className="character-name">{currentMonster.name}</p>
          <div className="textContainer" style={{display:playerDamageHide}}>
            <img
              src={"/images/damage.png"}
              className="damage"
              style={{ display: "inline" }}
            ></img>
            <div className="dmgNum">{playerDamage}</div>
          </div>
          <img src={currentMonster.image}></img>
          <div class="w3-black">
            <div
              class="w3-red"
              style={{ height: "20px", width: monsterHealthBar }}
            >
              {monsterHealthBar}
            </div>
          </div>
        </div>

        <div id="player-stats" className="combat-panel info">
          <CombatPlayerStats></CombatPlayerStats>
        </div>

        <div id="monster-stats" className="combat-panel info">
          <CombatMonsterStats></CombatMonsterStats>
        </div>

        <div id="battle-log" className="combat-panel">
          <CombatLog></CombatLog>
        </div>
      </div>

      <button
        style={{ display: hideButton }}
        className="button"
        onClick={() => startCombat()}
      >
        {startAdventure}
      </button>

      <Link to="/character">
        <button className="button" onClick={() => regenerate()}>
          End Combat
        </button>
      </Link>
    </div>
  );
};

export default CombatPage;
