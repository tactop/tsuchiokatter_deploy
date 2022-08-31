import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import Home from "./pages/homes/Home";
import Achive from "./pages/achive/Achive";
import Guide from "./pages/guide/Guide";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achived" element={<Achive />} />
        <Route path="/guide" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;
