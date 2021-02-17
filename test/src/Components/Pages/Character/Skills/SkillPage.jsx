import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";
import { CharactersContext } from "../CharacterContext";
import Skills from "./Skill";
import "./SkillPageStyle.css";

const SkillPage = () => {
  return (
    <div className="skill-main-container">
      <div className="trainer-image"><img src="/images/trainer.png" alt=""></img></div> 
      <Skills></Skills>
    </div>
  );
};

export default SkillPage;
