import React from 'react';
<<<<<<< HEAD
import img from '../../Assets/Images/burger-logo.png';
import classes from './Logo.css';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={img} alt='MyBurger' />
=======
import img from '../../assets/Images/reactBP.png';
import classes from './Logo.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={img} alt='ReactBP Logo' />
>>>>>>> reg
        </div>
    )
};

export default Logo;