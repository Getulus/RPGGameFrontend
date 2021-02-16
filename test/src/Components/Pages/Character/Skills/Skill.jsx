import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../CharacterContext";
import "./SkillStyle.css"

const Skills = () => {
  return (
    <div className="skill-container">
      <div className="skill">
        <img className="skill-img" alt=""></img>
        <div>Skill name</div>
      </div>
      <div className="skill">
        <img className="skill-img" alt=""></img>
        <div>Skill name</div>
      </div>
      <div className="skill">
        <img className="skill-img" alt=""></img>
        <div>Skill name</div>
      </div>
      <div className="skill">
        <img className="skill-img" alt=""></img>
        <div>Skill name</div>
      </div>
    </div>
  );
};


export default Skills
