import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./CSS/Root.css";
import "./CSS/Home.css";

function Root() {
  return (
    <>
      <div className="root-box">
        <div className="waveTextAnimated" >
          <span className="wave-1 root-heading">Let's</span>
          <span className="wave-2 root-heading">Create</span>
          <span className="wave-3 root-heading">your</span>
          <span className="wave-4 root-heading">Resume</span>
        </div>
        <Link to="/login" className="btn btn-dark px-3 root-link">
          Create my Resume
        </Link>
      </div>
      <Footer/>

    </>
  );
}

export default Root;