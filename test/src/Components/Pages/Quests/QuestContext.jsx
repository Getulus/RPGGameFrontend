import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const QuestContext = createContext();

export const QuestCollection = (props) => {
  const [availableQuests, setAvailableQuests] = useState([]);
  const [updateQuest, setUpdateQuest] = useState(0);
  const [playerQuests, setPlayerQuests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8762/charondor/quest/tavern-quests")
      .then((res) => {
        setAvailableQuests(res.data);
        console.log(res.data);
      });
    axios
      .get("http://localhost:8762/charondor/quest/player-quests")
      .then((res) => {
        setPlayerQuests(res.data);
        console.log(res.data);
      });
  }, [updateQuest]);

  return (
    <QuestContext.Provider
      value={[
        availableQuests,
        setAvailableQuests,
        updateQuest,
        setUpdateQuest,
        playerQuests,
        setPlayerQuests,
      ]}
    >
      {props.children}
    </QuestContext.Provider>
  );
};
