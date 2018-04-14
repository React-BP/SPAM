import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton/NavButton";
import "./NavigationItems.css";


const NavigationItems = () => (
    <div className="wrapper">
        <ul className="nav nav-tabs">
                <li className="btn-one">
                    <Link to="/">Home</Link>
                </li>
                <li className="btn-two">
                    <Link to="/wetsuits">Wetsuits</Link>
                </li>
                <li className="btn-three">
                    <Link to="/boards">Boards</Link>
                </li>
                <li className="btn-four">
                    <Link to="/clothing">Clothing</Link>
                </li>
                <li className="btn-five">
                    <Link to="/accessories">Accesories</Link>
                </li>
                <li className="btn-six">
                    <Link to="/login">Login</Link>
                </li>
                <li className="btn-seven">
                    <Link to="/signup">Sign Up</Link>
                </li>
        </ul>
    </div>

);

export default NavigationItems;