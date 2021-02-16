import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CharactersContext = createContext();

export const CharacterCollection = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState({items:[], quests:[]});
  const [currentMonster, setCurrentMonster] = useState([]);
  const [update, setUpdate] = useState(1);
  const [playerAttributes, setPlayerAttributes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8762/charondor/character/player`)
      .then((res) => {
        setCurrentPlayer(res.data);
        setPlayerAttributes(res.data.attributePoints);
      });
  }, [update]);

  useEffect(() => {
    axios
      .get(`http://localhost:8762/charondor/character/monster`)
      .then((res) => {
        setCurrentMonster(res.data);
      });
  }, [update]);

  return (
    <CharactersContext.Provider
      value={[
        currentPlayer,
        setCurrentPlayer,
        currentMonster,
        setCurrentMonster,
        update,
        setUpdate,
        playerAttributes,
        setPlayerAttributes,
      ]}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
