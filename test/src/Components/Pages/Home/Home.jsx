import React, { useState, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../Home/Home.css"

const HomePage = () => {


    return (
        <div className="main-page">
        <header className="main-header">
        </header>
        <Link style={{textDecoration : "none", color: "goldenrod"}} to="/character">
        <p className="start-game">Start Game</p>
        </Link>
      </div>
    );
  };
  
  export default HomePage;
  