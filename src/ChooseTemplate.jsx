import React from "react";
import "./ChooseTemplate.css";
import { Link } from "react-router-dom";
import logo from "./demo.png";
import logo1 from "./logo10.png";
import logo2 from "./logo11.png";
import logo3 from "./logo12.png";
import logo4 from "./logo13.png";
import logo5 from "./logo14.png";
import logo6 from "./logo15.png";
import logo7 from "./logo16.png";

function ChooseTemplate() {
  return (
    <>
    <h1 className="h11 display-4">Choose Your Template</h1>
      <div className="scope">
        <span style={{ "--i": 1 }}>
        <Link to="/content">
          <img src={logo} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 2 }}>
        <Link to="/content">
          <img src={logo1} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 3 }}>
        <Link to="/content">
          <img src={logo2} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 4 }}>
        <Link to="/content">
          <img src={logo3} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 5 }}>
        <Link to="/content">
          <img src={logo4} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 6 }}>
        <Link to="/content">
          <img src={logo5} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 7 }}>
        <Link to="/content">
          <img src={logo6} alt="not found" />
        </Link>
        </span>
        <span style={{ "--i": 8 }}>
        <Link to="/content">
          <img src={logo7} alt="not found" />
        </Link>
        </span>
      </div>
      </>
  );
}

export default ChooseTemplate;
