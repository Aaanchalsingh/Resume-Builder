import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";
import "./CSS/Content.css";

function Content() {
  const location = useLocation();
  const data1 = location.state?.data;
  const [data, setData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    profession: "",
    skills: [],
    hobbies: "",
    city: "",
    state: "",
    zip: "",
    Experience: [],
    Achievements: [],
    about: "",
    projects: [],
    certifications: [],
    qualities: "",
    contactInformation: "",
    linkedinId: "",
    githubId: "",
    photo: null,
    tenthPercentage: "",
    twelfthPercentage: "",
    collegeName: "",
    collegeYear: "",
    collegeCGPA: "",
    color: data1?.color,
  });

  const statesList = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const randomCities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Surat",
    "Jaipur",
  ];

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const fieldValue = type === "file" ? files[0] : value;

    setData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };
  const handleSendMessage = async () => {
    const formattedData = {
      fname: data.fname,
      lname: data.lname,
      phone: data.phone,
      email: data.email,
      profession: data.profession,
      skills: data.skills,
      hobbies: data.hobbies,
      city: data.city,
      state: data.state,
      zip: data.zip,
      Experience: data.Experience,
      Achievements: data.Achievements,
      about: data.about,
      projects: data.projects,
      certifications: data.certifications,
      qualities: data.qualities,
      contactInformation: data.contactInformation,
      linkedinId: data.linkedinId,
      githubId: data.githubId,
      photo: data.photo,
      tenthPercentage: data.tenthPercentage,
      twelfthPercentage: data.twelfthPercentage,
      collegeName: data.collegeName,
      collegeYear: data.collegeYear,
      collegeCGPA: data.collegeCGPA,
    };

    try {
      // Use "Resume" collection in Firestore
      const resumeCollection = collection(firestore, "Resume");
      await addDoc(resumeCollection, {
        ...formattedData,
        timestamp: Date.now(),
      });
      setData({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        profession: "",
        skills: [],
        hobbies: "",
        city: "",
        state: "",
        zip: "",
        Experience: [],
        Achievements: [],
        about: "",
        projects: [],
        certifications: [],
        qualities: "",
        contactInformation: "",
        linkedinId: "",
        githubId: "",
        photo: null,
        tenthPercentage: "",
        twelfthPercentage: "",
        collegeName: "",
        collegeYear: "",
        collegeCGPA: "",
      });

      console.log("Document written successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleSkillsChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
    const selectedSkills = value.split(",").map((skill) => skill.trim());
    setData((prevData) => ({
      ...prevData,
      skills: selectedSkills,
    }));
  };

  const handleProjectsChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
    const projectList = value.split(",").map((project) => project.trim());
    setData((prevData) => ({
      ...prevData,
      projects: projectList,
    }));
  };

  const handleCertificationsChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
    const certificationList = value
      .split(",")
      .map((certification) => certification.trim());
    setData((prevData) => ({
      ...prevData,
      certifications: certificationList,
    }));
  };
  const handleAchievementChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
    const pro = value.split(",").map((Achievements) => Achievements.trim());
    setData((prevData) => ({
      ...prevData,
      Achievements: pro,
    }));
  };

  const handleexperienceChange = (event) => {
    // eslint-disable-next-line
    const { name, value } = event.target;
    const cert = value.split(",").map((Experience) => Experience.trim());
    setData((prevData) => ({
      ...prevData,
      Experience: cert,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all required fields are filled
    const requiredFields = [
      "fname",
      "lname",
      "phone",
      "email",
      "profession",
      "skills",
      "hobbies",
      "city",
      "state",
      "zip",
      "Experience",
      "Achievements",
      "about",
      "projects",
      "certifications",
      "qualities",
      "contactInformation",
      "linkedinId",
      "githubId",
      "photo",
      "tenthPercentage",
      "twelfthPercentage",
      "collegeName",
      "collegeYear",
      "collegeCGPA",
    ];

    const unfilledFields = requiredFields.filter((field) => !data[field]);

    if (unfilledFields.length > 0) {
      alert(
        `Please fill in the following fields: ${unfilledFields.join(", ")}`
      );
    } else {
      navigate("/template", { state: { data } });
    }
  };

  return (
    <div className="box1">
      <h1 className="text-center contentheading">Fill Your Details</h1>
      <div className="boxcontainer">
        <div className="personal_details">Personal Details</div>
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <div className="col-md-8">
            <label htmlFor="validationCustom01" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom01"
              name="fname"
              value={data.fname}
              onChange={handleChange}
              placeholder="Enter Your First Name"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom02"
              name="lname"
              value={data.lname}
              onChange={handleChange}
              placeholder="Enter Your Last Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom03" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom03"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="Enter Your Phone Number"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom05" className="form-label">
              Profession
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom05"
              name="profession"
              value={data.profession}
              onChange={handleChange}
              placeholder="Enter Your Profession"
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="validationCustom09" className="form-label">
              State
            </label>
            <select
              className="form-select in"
              id="validationCustom09"
              name="state"
              value={data.state}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              {statesList.map((state) => (
                <option key={state} value={state} style={{ color: "black" }}>
                  {state}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom08" className="form-label">
              City
            </label>
            <select
              className="form-select in"
              id="validationCustom09"
              name="city"
              value={data.city}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              {randomCities.map((city) => (
                <option key={city} value={city} style={{ color: "black" }}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom10" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom10"
              name="zip"
              value={data.zip}
              onChange={handleChange}
              placeholder="Enter Your Zip"
            />
          </div>
          <div className="col-md-8">
            <label htmlFor="validationCustom12" className="form-label">
              Achievements
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom123"
              name="Achievements"
              value={data.Achievements.join(", ")}
              onChange={handleAchievementChange}
              placeholder="Enter Your Achievements"
            />
          </div>
          <div className="personal_details">Academic Background</div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              10th Percentage
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom01"
              name="tenthPercentage"
              value={data.tenthPercentage}
              onChange={handleChange}
              placeholder="Enter Your 10th Percentage"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom01" className="form-label">
              12th Percentage
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom01"
              name="twelfthPercentage"
              value={data.twelfthPercentage}
              onChange={handleChange}
              placeholder="Enter Your 12th Percentage"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              College Name
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom02"
              name="collegeName"
              value={data.collegeName}
              onChange={handleChange}
              placeholder="Enter Your College Name"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              College Year
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom02"
              name="collegeYear"
              value={data.collegeYear}
              onChange={handleChange}
              placeholder="Enter Your College Year"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="validationCustom02" className="form-label">
              College CGPA
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom02"
              name="collegeCGPA"
              value={data.collegeCGPA}
              onChange={handleChange}
              placeholder="Enter Your College CGPA"
            />
          </div>

          <div className="personal_details">Work Background</div>

          <div className="col-md-6">
            <label htmlFor="validationCustom14" className="form-label">
              Projects
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom14"
              name="projects"
              value={data.projects.join(", ")}
              onChange={handleProjectsChange}
              placeholder="Enter Your Projects (separated by commas)"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom15" className="form-label">
              Certifications
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom15"
              name="certifications"
              value={data.certifications.join(", ")}
              onChange={handleCertificationsChange}
              placeholder="Enter Your Certifications (separated by commas)"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom06" className="form-label">
              Skills
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom06"
              name="skills"
              value={data.skills.join(", ")}
              onChange={handleSkillsChange}
              placeholder="Enter Your Skills (separated by commas)"
            />
          </div>
          <div className="personal_details">Work ID'S</div>
          <div className="col-md-6">
            <label htmlFor="validationCustom18" className="form-label">
              LinkedIn ID
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom18"
              name="linkedinId"
              value={data.linkedinId}
              onChange={handleChange}
              placeholder="Enter Your LinkedIn ID"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="validationCustom19" className="form-label">
              GitHub ID
            </label>
            <input
              type="text"
              className="form-control in"
              id="validationCustom19"
              name="githubId"
              value={data.githubId}
              onChange={handleChange}
              placeholder="Enter Your GitHub ID"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom04" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control in"
              id="validationCustom04"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="personal_details">Past Work Experiences </div>
          <div className="col-md-12">
            <label htmlFor="validationCustom11" className="form-label">
              Work Experience
            </label>
            <textarea
              className="form-control in"
              id="validationCustom112"
              name="Experience"
              value={data.Experience.join(", ")}
              onChange={handleexperienceChange}
              placeholder="Enter Your Work Experience"
              rows={8}
            ></textarea>
          </div>
          <div className="col-12">
            <label htmlFor="validationCustom20" className="form-label">
              Upload Photograph
            </label>
            <input
              type="file"
              className="form-control"
              id="validationCustom20"
              name="photo"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="btnn col-12 text-center">
            <button
              className="btn col-2 btn-outline-warning "
              type="submit"
              style={{ fontSize: "1.5rem" }}
              onClick={handleSendMessage}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Content;
