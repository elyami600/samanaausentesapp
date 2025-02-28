import React from 'react';
import Styles from "./about.module.css";

const Footer = () => {
    return (
        <footer className={Styles.About_footer}>
            <p>Follow us on:</p>
            <div>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </div>
            <p>&copy; 2025 Samanenses Ausentes. All rights reserved.</p>
        </footer>
    );
};

export default Footer;