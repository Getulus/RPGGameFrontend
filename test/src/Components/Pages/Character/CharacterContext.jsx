import React, { useEffect, useState, createContext } from "react";
import axios from 'axios';


export const CharactersContext = createContext();

export const CharacterCollection = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState([]);
  const [currentMonster, setCurrentMonster] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8762/charondor/character/player`).then((res) => {
      setCurrentPlayer(res.data);
      console.log(res.data)
    });
  }, []);

  return (
    <CharactersContext.Provider
      value={[
        currentPlayer,
        setCurrentPlayer,
        currentMonster,
        setCurrentMonster,
      ]}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};
