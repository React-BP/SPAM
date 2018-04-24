import React from 'react';
import classes from './Feature.css';
import Button from '../UI/Button/button';

const Feature = (props) => {
    const style={
        image:{
            height: 185,
            width: 185,
            marginLeft: 10,
            marginTop: 10
        },
        button:{
            marginLeft: '15%',
            marginTop: '-40'

        }
    }


    return (
        
            <div className={classes.card}>
                <div className={classes.imgCont}>
                    <img alt='Featured Item 1' src={props.item1} style={style.image}/>
                </div>
                <div className={classes.itemInfo}>
                    <h3>{props.brand}</h3>
                    <h5>{props.ItemTitle}</h5>
                    <h5>{props.gender}</h5>
                    <p>Price: {props.price}</p>
                <Button style={style.button} btnType="View" clicked={props.click}>View</Button>
                </div>
                
            </div>
        
    );
};

export default Feature;