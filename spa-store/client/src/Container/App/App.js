//Extract all the html 
import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from "../Layout/Layout";
// import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import Home from "../../Components/Pages/Home/Home";
import Wetsuits from "../../Components/Pages/Wetsuits/Wetsuits";
import Boards from "../../Components/Pages/Boards/Boards";
import Clothing from "../../Components/Pages/Clothing/Clothing";
import Accessories from "../../Components/Pages/Accessories/Accessories";
import Checkout from "../Checkout/Checkout";
class App extends Component {

  state = {
    orders: [
      {
        name: "name",
        brand:"brand",
        pic: "pic",
        price:"price"
    },
    {
      name: "name2",
      brand: "brand2",
      pic: "pic2",
      price: "price2"
    }
    ]
  };

  orderHandler(){
    console.log('Calling order in app.js');
    /**const temp = [...this.state.orders];
    temp.push(item);
    this.setState({orders: temp});**/
  }

  render(){
    const cart = this.state.orders;
    return(
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store/wetsuits" render={(props) => <Wetsuits {...props} cart={this.orderHandler}/>} />
            <Route exact path="/store/boards" render={(props) => <Boards {...props} cart={this.orderHandler} />} />
            <Route exact path="/store/clothing" render={(props) => <Clothing {...props} cart={this.orderHandler} />} />
            <Route exact path="/store/accessories" render={(props) => <Accessories {...props} cart={this.orderHandler} />} />
            <Route exact path="/store/checkout" render={(props) => <Checkout {...props} cart={this.orderHandler} orders={this.state.orders}/>} />
            <Route exact path="/store/logout" />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
