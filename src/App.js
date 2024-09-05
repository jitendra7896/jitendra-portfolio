import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import "./App.scss";
import AboutPage from "./components/About";
import WorkPage from "./components/Work";
import MySkillsPage from "./components/MySkills";
import React from "react";

function App() {
  return (
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/skills" element={<MySkillsPage />} />
    </Routes>
    </React.StrictMode>
  );
}

export default App;
