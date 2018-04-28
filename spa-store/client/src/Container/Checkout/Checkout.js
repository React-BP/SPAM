import React, { Component } from 'react';
import Button from '../../Components/UI/Button/button';
import classes from './Checkout.css';
import API from "../../utils/API";

class store extends Component {
   state={
      orderList:{}
   }

   componentWillMount(){
      console.log(this.props);
   }

   componentDidMount(){

      this.loadOrder(localStorage.getItem('user'));
      this.setState({
         orderList: this.props.orders
      })
      console.log(this.state.orderList);
   }

   buyItems(){
      console.log("You sucessfully bought these items");
   }

   loadOrder(id){
       API.searchOrder(id)
          .then((res) => {
              this.setState({
                  orderList: res.data
              });
          });
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