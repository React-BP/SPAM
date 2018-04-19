import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => (

    <div className="footer text-center">
        <span className="glyphicon glyphicon-copyright-mark">React-BP</span>
        <a href="https://github.com/React-BP/SPAM-store" className="footerLink"><span className="fa fa-github">Github</span></a>
    </div>

);

export default Footer;