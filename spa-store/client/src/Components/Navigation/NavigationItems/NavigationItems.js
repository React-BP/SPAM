import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton/NavButton";
import "./NavigationItems.css";


const NavigationItems = () => (
    <div className="wrapper">
        <ul className="nav nav-tabs">
            <li className="btn-one">
                <Link to="/" className={window.location.pathname === "/" ? "active navLink" : "navLink"}>Home</Link>
            </li>
            <li className="btn-two">
                <Link to="/wetsuits" className={window.location.pathname === "/wetsuits" ? "active navLink" : "navLink"}>Wetsuits</Link>
            </li>
            <li className="btn-three">
                <Link to="/boards" className={window.location.pathname === "/boards" ? "active navLink" : "navLink"}>Boards</Link>
            </li>
            <li className="btn-four">
                <Link to="/clothing" className={window.location.pathname === "/clothing" ? "active navLink" : "navLink"}>Clothing</Link>
            </li>
            <li className="btn-five">
                <Link to="/accessories" className={window.location.pathname === "/accessories" ? "active navLink" : "navLink"}>Accesories</Link>
            </li>
            <li className="btn-six">
                <Link to="/login" className={window.location.pathname === "/login" ? "active navLink" : "navLink"}>Login</Link>
            </li>
            <li className="btn-seven">
                <Link to="/signup" className={window.location.pathname === "/signup" ? "active navLink" : "navLink"}>Sign Up</Link>
            </li>
            <li className="btn-eight">
                <Link to="/cart" className={window.location.pathname ==="/cart" ? "active navLink" : "navLink"}>View your cart</Link>
            </li>
        </ul>
    </div>

);

export default NavigationItems;