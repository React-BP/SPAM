import React from 'react';
import classes from './ItemCards.css';
import Button from '../UI/Button/button';

const ItemCards = (props) => {
    const style={
        image:{
            height: 185,
            width:185,
            margin: 5
        }
    }
    return (
        <div className={classes.card}>
            <div className={classes.imgCont}>
                <img alt={props.itemName} src={props.itemPic} style={style.image}/>
            </div>
            <div className={classes.itemInfo}>
                <h3>{props.ItemTitle}</h3>
                <p>Price: {props.price}</p>
            </div>
            <Button btnType='View' clicked={props.click}>View</Button>
            
        </div>
    );
};

export default ItemCards;