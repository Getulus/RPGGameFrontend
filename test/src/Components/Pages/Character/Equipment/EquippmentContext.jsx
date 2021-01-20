import React, { useEffect, useState, createContext } from "react";

export const EquippmentContext = createContext();

export const EquippmentCollection = (props) => {
  const [leftHand, setLeftHand] = useState("/images/left-hand.png");
  const [rightHand, setRigthHand] = useState("/images/right-hand.png");
  const [head, setHead] = useState("/images/head.png");
  const [chest, setChest] = useState("/images/chest.png");
  const [hands, setHands] = useState("images/hand.png");
  const [legs, setLegs] = useState("images/legs.png");
  const [foot, setFoot] = useState("images/foot.png");
  return (
    <EquippmentContext.Provider
      value={[leftHand, setLeftHand,  rightHand, setRigthHand, head, setHead, chest, setChest, hands, setHands, legs, setLegs, foot, setFoot]}
    >
      {props.children}
    </EquippmentContext.Provider>
  );
};