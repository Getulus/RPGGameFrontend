import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../CharacterContext";
import "./SkillStyle.css";

const Skills = () => {
  const [
    currentPlayer,
    setCurrentPlayer,
    currentMonster,
    setCurrentMonster,
    update,
    setUpdate,
  ] = useContext(CharactersContext);

  const renderSkills = (skill) => {
    return (
      <div className="skill tooltip">
        <div>{skill.name}</div>
        <img className="skill-img" src={skill.image} alt=""></img>
        <div className="skill-tip">{skill.text}</div>
      </div>
    );
  };

  return (
    <div className="skill-container">
      {currentPlayer.skills.map((skill) => renderSkills(skill))}
    </div>
  );
};

export default Skills;
