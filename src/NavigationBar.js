import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav style={{ 
      padding: "15px", 
      backgroundColor: "#f8f9fa", 
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center"
    }}>
      <h2 style={{ margin: 0, marginRight: "50px" }}><Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Samaná Ausentes</Link></h2>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Home</Link>
        <Link to="/about" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>About</Link>
        <Link to="/Event" style={linkStyle} onMouseEnter={(e) => e.target.style.color = hoverStyle.color} onMouseLeave={(e) => e.target.style.color = linkStyle.color}>Event</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontSize: "18px",
  fontWeight: "500",
  padding: "5px 10px",
  transition: "color 0.3s ease, transform 0.3s ease",
};

const hoverStyle = {
  color: "#007BFF",
};

export default NavigationBar;