import React, { useEffect, useState, createContext } from "react";

export const EquippmentContext = createContext();

export const EquippmentCollection = (props) => {
  const [leftHand, setLeftHand] = useState({image: "/images/left-hand.png"});
  const [rightHand, setRigthHand] = useState({image : "/images/right-hand.png"});
  const [head, setHead] = useState({image : "/images/head.png"});
  const [chest, setChest] = useState({image : "/images/chest.png"});
  const [hands, setHands] = useState({image : "images/hand.png"});
  const [neck, setNeck] = useState({image : "images/legs.png"});
  const [foot, setFoot] = useState({image : "images/foot.png"});
  return (
    <EquippmentContext.Provider
      value={[leftHand, setLeftHand,  rightHand, setRigthHand, head, setHead, chest, setChest, hands, setHands, neck, setNeck, foot, setFoot]}
    >
      {props.children}
    </EquippmentContext.Provider>
  );
};