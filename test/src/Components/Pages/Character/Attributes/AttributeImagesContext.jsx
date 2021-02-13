import React, { useEffect, useState, createContext } from "react";

export const AttributeImageContext = createContext();

export const AttributeImageCollection = (props) => {
  const [attributeImages, setAttributeImages] = useState({
    gold: "/images/gold.png",
    stamina: "/images/stamina.png",
    defenseValue: "/images/defense.png",
    strength: "/images/strength.png",
    agility: "/images/agility.png",
    attackValue: "/images/attack.png",
    wisdom: "/images/wisdom.png",
    armor: "/images/chest.png",
    health: "/images/health.png",
    magicResistance:"/images/magicres.png"
  });

  return (
    <AttributeImageContext.Provider
      value={[attributeImages, setAttributeImages]}
    >
      {props.children}
    </AttributeImageContext.Provider>
  );
};
