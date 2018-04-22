import React from 'react';
import Button from "../UI/Button/button";

const ItemCards = () => {
   const style={
      image:{
         height: 185,
         width: 185,
         margin: 0 5
      }
   }
   return (
      <div className={classes.card}>
         <div>
           <img alt={props.altInfo} src={props.item} style={style.image}/>
            <div>
               <h3>{props.ItemTitle}</h3>
               <p>Price: {props.price}</p>
            </div>
            <Button>View</Button>
         </div> 
      </div>
   );
};

export default ItemCards; 