import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Event from "./Event";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Event" element={<Event />} />
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;