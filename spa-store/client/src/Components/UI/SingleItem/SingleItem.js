import React from 'react';
import classes from "./SingleItem.css";
import Button from '../Button/button';

const SingleItem = (props) => {

    const style={
        image:{
            height:250,
            width: 250
        }
    }

    console.log('props is: ', props);

    const orderHandler=()=>{

        console.log("Order button works");
    }

    return (
        <div className={classes.modalContent}>
            <div style={style.image}src={props.singleItemPic} alt={props.singlePicInfo}>
                <h1>{props.singleItemName}</h1>
                <h1>{props.singleItemBrand}</h1>
                <h2>{props.singleItemPrice}</h2>
                <img src={props.singleItemPic} alt={props.singleItemName}></img>
            </div>
            <div className={classes.orderBox}>
                <h1>DropDown: Quantity</h1>
                <Button btnType='Order' clicked={this.orderHandler}>Order</Button>
            </div>
        </div>
    );
};

export default SingleItem;