import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import image from "../public/unnamed (1).jpg";

function App() {
  return (
    <><div className="profile-container">
      <h1>Rizwan Ullah</h1>
      <p>I mern stack developer at SMIT Peshwar</p>
      <ul className="skills-list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bootsrap</li>
        <li>React</li>
      </ul>
      <img className="profile-image" src={image} alt="" />
      <footer className="footer">Devoloped by Rzwan @2026</footer>
      </div>
    </>
  );
}

export default App;
