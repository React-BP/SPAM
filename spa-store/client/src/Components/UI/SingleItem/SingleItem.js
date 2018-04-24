import React from 'react';
import classes from "./SingleItem.css";
import Button from '../Button/button';

const SingleItem = () => {
    const style={
        image:{
            height:250,
            width: 250
        }
    }

    orderHandler =()=>{
        console.log("Order button works");
    }

    return (
        <div className={classes.modalContent}>
            <div style={style.image}src={props.singleItemPic} alt={props.singlePicInfo}></div>
            <div className={classes.orderBox}>
                <h1>DropDown: Quantity</h1>
                <h3>{props.sizes}</h3>
                <Button btnType='Order' clicked={this.orderHandler}>Order</Button>
            </div>
        </div>
    );
};

export default SingleItem;