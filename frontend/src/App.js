import React, { useContext } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/homes/Home";
import Achive from "./pages/achive/Achive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achived" element={<Achive />} />
      </Routes>
    </Router>
  );
}

export default App;
