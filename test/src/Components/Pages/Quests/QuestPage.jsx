import "./QuestPageStyle.css";
import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CharactersContext } from "../Character/CharacterContext";
import { QuestContext } from "./QuestContext";

const QuestPage = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const [
    availableQuests,
    setAvailableQuests,
    updateQuest,
    setUpdateQuest,
  ] = useContext(QuestContext);

  const [hideCompleteButton, sethideCompleteButton] = useState("none");

  const acceptQuest = (questName) => {
    axios
      .post("http://localhost:8762/charondor/quest/accept", {
        questName: questName,
      })
      .then((res) => {
        setUpdate(update + 1);
        setUpdateQuest(updateQuest + 1);
      });
  };

  const renderAvailableQuests = (quest) => {
    return (
      <div className="quest">
        <p className="line">{quest.questName}</p>
        <p className="line">
          Task: Kill {quest.task} {quest.monsterName}
        </p>
        <div className="line ">
          Rewards:
          <p className="line">Experience: {quest.experience}</p>
          <p className="line">Gold: {quest.gold}</p>
        </div>
        <div
          onClick={() => acceptQuest(quest.questName)}
          id="quest-button"
          className="button"
        >
          Accept
        </div>
      </div>
    );
  };

  const completeQuest = (questname) => {};

  const renderPlayerQuests = (quest) => {
    let hideButton = "none";

    if (quest.completed) {
      hideButton = "inline-block";
    }

    return (
      <div className="quest">
        <p className="line">{quest.questName}</p>
        <p className="line">
          Task: {quest.monsterName} {quest.task} / {quest.progress}
        </p>
        <div className="line ">
          Rewards:
          <p className="line">Experience: {quest.experience}</p>
          <p className="line">Gold: {quest.gold}</p>
        </div>
        <div
          onClick={() => completeQuest(quest.questName)}
          id="quest-button"
          className="button"
          style={{ display: hideButton }}
        >
          Complete
        </div>
      </div>
    );
  };

  return (
    <div className="quest-page-main">
      <div className="tavern-image">
        <img src="/images/tavern.png"></img>
      </div>
      <div className="available-quests quest-container">
        <p className="quest-title">Available Quests</p>
        {availableQuests.map((quest) => renderAvailableQuests(quest))}
      </div>
      <div className="player-quests quest-container">
        <p className="quest-title">Player's Quests</p>
        {currentPlayer.quests.map((quest) => renderPlayerQuests(quest))}
      </div>
    </div>
  );
};

export default QuestPage;
