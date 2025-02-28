import React from 'react';
import Styles from "./about.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className={Styles.About_footer} style={{ textAlign: "center", padding: "20px", backgroundColor: "#222", color: "#fff" }}>
            <p>Follow us on:</p>
            <div style={{ fontSize: "24px" }}>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#1877f2" }}>
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/samanenses_ausentes/?utm_source=qr&igsh=ajhlNXR5cXhlNnM2" target="_blank" rel="noopener noreferrer" style={{ margin: "0 10px", color: "#E1306C" }}>
                    <FaInstagram />
                </a>
            </div>
            <p>&copy; 2025 Samanenses Ausentes. All rights reserved.</p>
        </footer>
    );
};

export default Footer;