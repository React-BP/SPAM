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
                <h3>{props.brand}</h3>
                <h5>{props.ItemTitle}</h5>
                <h4>{props.gender}</h4>
                <p>Price: {props.price}</p>
                <Button btnType='View' clicked={props.click}>View</Button>
            </div>
            
            
        </div>
    );
};

export default ItemCards;