/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Places from "./components/Places.js";
import Navbar from "./components/Navbar.js";
import AboutList from "./components/About.js";

function App() {
  return (
    <div class="relative bg-line h-screen">
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Places />} />
        <Route path="about" element={<Places />} />
        <Route path="about/:id" element={<AboutList />} />
      </Routes>
    </div>
  );
}

export default App;
