import { Routes, Route, useLocation } from "react-router-dom";

import Main from "./components/Main";
import "./App.scss";
import AboutPage from "./components/About";
import WorkPage from "./components/Work";
import MySkillsPage from "./components/MySkills";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<MySkillsPage />} />
      </Routes>
    </>
  );
}

export default App;
