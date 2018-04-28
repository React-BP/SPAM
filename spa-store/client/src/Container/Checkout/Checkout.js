import React, { Component } from 'react';
import Button from '../../Components/UI/Button/button';
import classes from './Checkout.css';
class store extends Component {
   state={
      orderList:[]
   }
   componentWillMount(){
      console.log(this.props);
   }
   componentDidMount(){
      this.setState({
         orderList: this.props.orders
      })
      console.log(this.state.orderList);
   }
   buyItems(){
      console.log("You sucessfully bought these items");
   }
   render() {

      return (
         <div className={classes.checkOutBox}>

            {this.state.orderList.map((item,index)=>{
               return(
                  <div className={classes.orderBox} key={index}>
                     <p>Name: {item.name}</p>
                     <p>Brand: {item.brand}</p>
                     <p>Price: {item.price}</p>
                  </div>
               );
            })}
            <div>
               <p>Total Price:{}</p>
               <Button btnType='Order' clicked={this.buyItems}>Buy</Button>
            </div>
         </div>
      );
   }
}

export default store;