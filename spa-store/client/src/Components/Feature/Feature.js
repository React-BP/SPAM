import React from 'react';
import classes from './Feature.css';
import Button from '../UI/Button/button';

const Feature = (props) => {
    const style={
        image:{
            height: 185,
            width: 185,
            textAlign: 'center'
        }
    }


    return (
        
            <div className={classes.card}>
                <div className={classes.imgCont}>
                    <img alt='Featured Item 1' src={props.item1} style={style.image}/>
                </div>
                <div className={classes.itemInfo}>
                    <h3>{props.ItemTitle}</h3>
                    <p>Price: {props.price}</p>
                </div>
                <Button btnType="View" clicked={props.click}>View</Button>
            </div>
        
    );
};

export default Feature;