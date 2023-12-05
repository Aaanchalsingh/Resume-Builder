import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/ChooseTemplate.css";
import logo from "./Images/demo.png";
import logo1 from "./Images/logo10.png";
import logo2 from "./Images/logo11.png";
import logo3 from "./Images/logo12.png";
import logo4 from "./Images/logo13.png";
import logo5 from "./Images/logo14.png";
import logo6 from "./Images/logo15.png";
import logo7 from "./Images/logo20.png";
import Footer from "./Footer";

function ChooseTemplate() {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template) => {
    console.log(template.color);
    setSelectedTemplate(template);
    navigate("/content", {
      state: { data: { ...template, color: template.color } },
    });
  };

  const templates = [
    { id: 1, image: logo, color: "#080546" },
    { id: 2, image: logo1, color: "#F64C72" },
    { id: 3, image: logo2, color: "#DFDE15" },
    { id: 4, image: logo3, color: "#C515DF" },
    { id: 5, image: logo4, color: "#F60399" },
    { id: 6, image: logo5, color: "#F7052C" },
    { id: 7, image: logo6, color: "#05F7DD" },
    { id: 8, image: logo7, color: "#000000" },
  ];

  return (
    <>
      <h1 className="h11 display-4">Choose Your Template</h1>
      <div className="scope">
        {templates.map((template) => (
          <span key={template.id} style={{ "--i": template.id }}>
            <button onClick={() => handleTemplateClick(template)}>
              <img src={template.image} alt="not found" />
            </button>
          </span>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default ChooseTemplate;
