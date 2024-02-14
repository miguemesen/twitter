import React from "react";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectTemplate from "./ProjectTemplate";

const NavigationRouter = () => {
  return (
    <Router>
      <ProjectTemplate>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ProjectTemplate>
    </Router>
  );
};

export default NavigationRouter;
