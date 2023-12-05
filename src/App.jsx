import React from "react";
import Root from "./Root";
import { Routes, Route } from "react-router-dom";
import Content from "./Content";
import Template from "./Template";
import ChooseTemplate from "./ChooseTemplate";
import Template2 from "./Template2";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Root />} />
        <Route exact path="/content" element={<Content />} />
        <Route exact path="/template" element={<Template />} />
        <Route exact path="/choosetemplate" element={<ChooseTemplate />} />
        <Route path="/template2" component={Template2} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
