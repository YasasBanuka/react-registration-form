import React from "react";


export const Footer = () => {
    return(
        <footer className="App-footer">
            <p>
                <span>&copy;</span> {new Date().getFullYear()} Improved and Debugged by Yasas Banuka!
                <span className="footer-caption"> Check out my profile on </span>
                <a href="https://www.linkedin.com/in/yasasbanuka/">LinkedIn</a>
            </p>
        </footer>
    );
};
