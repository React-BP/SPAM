import React from "react";
import { Link } from "react-router-dom";
import NavButton from "./NavButton/NavButton";
import classes from "./NavItems.css";


const NavigationItems = () => (
    <div className="wrapper">
        <ul className={classes.NavigationItems}>
            <NavButton link='/' exact>Store</NavButton>
            <NavButton link='/store/wetsuits' exact>Wetsuits</NavButton>
            <NavButton link='/store/boards' exact></NavButton>
            <NavButton link='/store/clothing' exact></NavButton>
            <NavButton link='/store/accessories' exact></NavButton>
            <NavButton link='/store/login' exact></NavButton>
            <NavButton link='/store/logout'></NavButton>
            <NavButton link='/store/signup' exact></NavButton>
            <NavButton link='/store/checkout'></NavButton>
        </ul>
    </div>

);

export default NavigationItems;