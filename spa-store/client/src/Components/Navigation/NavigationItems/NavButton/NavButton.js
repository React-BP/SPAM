import React from "react";
import { Link } from "react-router-dom";

const NavButton = (props) => {
    return(
        <li className="/">}>
            <Link to="/">{this.props.text}</Link>
        </li>
    );
}

export default NavButton; 

//{window.location.pathname === "/" ? "active" : ""