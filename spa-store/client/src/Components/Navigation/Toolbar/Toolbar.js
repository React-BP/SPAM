import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';
import DrawerToggle from './../SideDrawer/DrawerToggle';

const Toolbar = (props) => {

    return (
<<<<<<< HEAD
        <header className={classes.Toolbar}>
=======
        <div className={classes.Toolbar}>
>>>>>>> reg
            <DrawerToggle click={props.drawerToggleClicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <Navigation />
            </nav>
<<<<<<< HEAD
        </header>
=======
        </div>
>>>>>>> reg
    );
};

export default Toolbar;