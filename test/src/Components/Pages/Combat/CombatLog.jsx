import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CombatLogContext } from "./CombatLogContext";

const CombatLog = () => {
  const [combatLog, setCombatLog, logUpdate, setLogUpdate] = useContext(
    CombatLogContext
  );

  /*
  const [firstLog, setFirstLog] = useState([{ name: "hello" }])

  useEffect(() => {
    setCombatLog([{ name: "hello" }]);
  }, [firstLog]);
*/
  const renderCombatLogs = (logData) => {
    return (
      <div className="log-blokk">
        <p className="stat">Round: {logData.numberOfRound}</p>
        <p className="stat">Attacker: {logData.name}</p>
        <p className="stat">Damage: {logData.damageDealt}</p>
        <p className="stat">
          Defender Remaning Health: {logData.enemyRemainingHealth}
        </p>
      </div>
    );
  };

  return (
    <div>
      <p>Combat Log: </p>
      {combatLog.map((logData) => renderCombatLogs(logData))}
    </div>
  );
};

export default CombatLog;
