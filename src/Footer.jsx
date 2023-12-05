import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="container"
    style={{
      position:"absolute",
      top:"91vh",
      left:"1vw",
    }}>
      <section className="footer text-white bg-transparent"style={{
          display:"flex",
          width:"100%",
          justifyContent:"space-evenly",
          overflow:"hidden"
        }}>
        <div className=""
         >
            <a
              href="https://www.linkedin.com/in/Aanchalsingh2003/"
              className="btn btn-outline-light rounded-circle m-2"
              target="_blank"
              rel="noreferrer"

            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Aaanchalsingh"
              className="btn btn-outline-light rounded-circle m-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="mailto:aanchalsinghuk@gmail.com"
              className="btn btn-outline-light rounded-circle m-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              href="https://twitter.com/Aanchal98654594"
              className="btn btn-outline-light rounded-circle m-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://t.me/aanchal_Singhh"
              className="btn btn-outline-light rounded-circle m-2"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTelegramPlane} />
            </a>
          </div>
            <h5 className="credit font-bold text-white border-t-2 border-white text-center pt-2 " style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
              All Right &copy; Reserved By Aanchal Singh
            </h5>
      </section>
    </div>
  );
}

export default Footer;
