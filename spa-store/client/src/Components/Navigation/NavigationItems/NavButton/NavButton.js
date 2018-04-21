import React from "react";
import classes from './NavButton.css';
import { NavLink } from "react-router-dom";

const NavButton = (props) => {
    return(
        <div>
            <li className={classes.NavItem}>
                <NavLink
                    exact={props.exact}
                    activeClassName={classes.active}
                    to={props.link}>{props.children}
                </NavLink>
            </li>
        </div>
    );
}

export default NavButton; 