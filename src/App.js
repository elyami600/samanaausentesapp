import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import Event from "./Event";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
