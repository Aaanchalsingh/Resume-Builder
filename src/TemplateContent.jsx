import React from "react";
import "./CSS/templatestyle.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "./Footer";

function TemplateContent({ data, resumeRef, color }) {
  return (
    <>
    <div className="fullbox">
      <div ref={resumeRef} className="boxtemplate">
        <div className="template-box1">
          <div className="rectangle" style={{ backgroundColor: color }}>
            <h1>
              {data.fname} {data.lname}
            </h1>
            <h3>{data.profession}</h3>
          </div>
          {data.photo && (
            <div className="circle">
              <img
                src={URL.createObjectURL(data.photo)}
                alt="User"
                className="rounded-image border-dark "
              />
            </div>
          )}
          <div
            className="rectangle1  text-center"
            style={{ backgroundColor: color }}
          >
            Education
          </div>
          <div className="b01">
            <p className="mx-6 my-lg-4 px-5 ">
              10th Marks: {data.tenthPercentage}%
              <br />
              12th Marks: {data.twelfthPercentage}%
              <br />
              College: {data.collegeName}
              <br />
              College Year: {data.collegeYear}
              <br />
              College CGPA: {data.collegeCGPA}
            </p>
            <div className="c">
              <div
                className="rectangle-timeline text-center"
                style={{ backgroundColor: color }}
              >
                2019-20
              </div>
              <div
                className="rectangle-timeline text-center"
                style={{ backgroundColor: color }}
              >
                2020-21
              </div>
              <div
                className="rectangle-timeline text-center"
                style={{ backgroundColor: color }}
              >
                2021-25
              </div>
            </div>
          </div>
          <div className="b0">
            <div
              className="rectangle2 text-center"
              style={{ backgroundColor: color }}
            >
              Projects
            </div>
            <div
              className="rectangle2 text-center"
              style={{ backgroundColor: color }}
            >
              Certifications
            </div>
          </div>
          <div className="mx-3 my-lg-3 px-3 ">
            <div className="experience-column proj text-left">
              {data.projects.length > 0 && (
                <div className="experience-list text-left">
                  <ul className="skills-list text-left">
                    {data.projects.map((project, index) => (
                      <li key={index}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.certifications.length > 0 && (
                <div className="experience-list text-left">
                  <ul className="skills-list text-left">
                    {data.certifications.map((certification, index) => (
                      <li key={index}>{certification}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="b0">
            <div
              className="rectangle2 px-4 text-center"
              style={{ backgroundColor: color }}
            >
              Experience
            </div>
            <div
              className="rectangle2 px-4 text-center"
              style={{ backgroundColor: color }}
            >
              Achievements
            </div>
          </div>
          <div className="my-lg-3 px-3 text-left">
            <div className="experience-column proj text-left">
              {data.Experience.length > 0 && (
                <div className="experience-list text-left">
                  <ul className="skills-list text-left">
                    {data.Experience.map((Experience, index) => (
                      <li key={index}>{Experience}</li>
                    ))}
                  </ul>
                </div>
              )}
              {data.Achievements.length > 0 && (
                <div className="experience-list text-left">
                  <ul className="skills-list text-left">
                    {data.Achievements.map((Achievements, index) => (
                      <li key={index}>{Achievements}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="template-box2">
          <div className="move">
            <button
              className="btn btn-outline-light b1 w-auto "
              style={{ backgroundColor: color }}
            >
              <FaPhone className="favicon" /> CONTACT ME
            </button>
            <ul className="contact-info mx-4 my-lg-4 px-5">
              <li>
                <FaPhone className="favicon" /> {data.phone}
              </li>
              <li>
                <FaEnvelope className="favicon" /> {data.email}
              </li>
              <li>
                <FaMapMarkerAlt className="favicon" /> {data.city}, {data.state}
              </li>
              <li>
                <FaEnvelope className="favicon" /> {data.zip}
              </li>
            </ul>
            <button
              className="btn btn-outline-light b2  w-auto"
              style={{ backgroundColor: color }}
            >
              PRO SKILLS
            </button>
            <p className="mx-5 my-lg-4 px-5">
              {data.skills.length > 0 && (
                <ul className="skills-list">
                  {data.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              )}
            </p>
            <hr
              style={{
                borderTop: "1px solid",
                width: "50%",
                margin: "16px 0",
                opacity: "1",
              }}
            />
            <div className="contact-icons">
              {data.githubId && (
                <a
                  href={`https://github.com/${data.githubId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icon" size={32} color="White" />
                </a>
              )}
              {data.githubId && data.linkedinId && (
                <span className="icon-spacing" />
              )}
              {data.linkedinId && (
                <a
                  href={`https://linkedin.com/in/${data.linkedinId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icon" size={32} color="White" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
     <Footer/>
     </>
  );
}

export default TemplateContent;
