import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/whatis/AboutPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/What-is-the-metar" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
