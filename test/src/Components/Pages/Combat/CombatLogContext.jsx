import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

export const CombatLogContext = createContext();

export const CombatLogCollection = (props) => {
  const [combatLog, setCombatLog] = useState([{name:""}]);
  const [logUpdate, setLogUpdate] = useState(1);

  useEffect(()=>{
    axios.get(`http://localhost:8762/charondor/action/combat-log`).then(
      (res) => {
        if (res.data) {
          setCombatLog(res.data);
          console.log(res.data);
        }
      }
    );
  },[logUpdate])



  return (
    <CombatLogContext.Provider
      value={[combatLog, setCombatLog, logUpdate, setLogUpdate]}
    >
      {props.children}
    </CombatLogContext.Provider>
  );
};
