import React, {
  BrowserRouter as Router,
  useState,
  useContext,
  useEffect,
} from "react";

import ReactDOM from "react-dom";
import "./ChooseClassStyle.css";

const ChooseClass = () => {
  return (
    <div className="choose-main">
      <div className="page-overlay">
        <div className="class-container">
          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="warrior" className="class-card flip-card-front"></div>
            <div id="warrior-sign" className="class-card flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="druid" className="class-card flip-card-front"></div>
            <div id="druid-sign" className="class-card flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="wizard" className="class-card flip-card-front"></div>
            <div id="wizard-sign" className="class-card flip-card-back"></div>
            </div>
          </div>

          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="striker" className="class-card flip-card-front"></div>
            <div id="striker-sign" className="class-card flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="necromancer" className="class-card flip-card-front"></div>
            <div id="necromancer-sign" className="class-card flip-card-back"></div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
            <div id="trap-master" className="class-card flip-card-front"></div>
            <div id="trap-master-sign" className="class-card flip-card-back"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ChooseClass;


/*

          */