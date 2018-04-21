import React from 'react';
import img from '../../Assets/Images/reactBP.png';
import classes from './Logo.css';

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={img} alt='ReactBP Logo' />
        </div>
    )
};

export default Logo;