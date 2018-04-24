import React from "react";
// import { Link } from "react-router-dom";
import classes from "./Footer.css";


const Footer = () => (

    <div className={classes.footer}>
        <span className="far fa-copyright">React-BP</span>
        <a href="https://github.com/React-BP/SPAM-store" className={classes.footerLink}><span className="fab fa-github">Github</span></a>
    </div>

);

export default Footer;