//Extract all the html 
import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
<<<<<<< HEAD
import './App.css';
import Layout from "../../Components/Layout/Layout";
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
=======
import Layout from "../Layout/Layout";
// import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
>>>>>>> reg
import Home from "../../Components/Pages/Home/Home";
import Wetsuits from "../../Components/Pages/Wetsuits/Wetsuits";
import Boards from "../../Components/Pages/Boards/Boards";
import Clothing from "../../Components/Pages/Clothing/Clothing";
import Accessories from "../../Components/Pages/Accessories/Accessories";
<<<<<<< HEAD
import Footer from "../../Components/UI/Footer/Footer";
=======
>>>>>>> reg

class App extends Component {

  render(){
    return(
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/store/wetsuits" component={Wetsuits} />
            <Route exact path="/store/boards" component={Boards} />
            <Route exact path="/store/clothing" component={Clothing} />
            <Route exact path="/store/accessories" component={Accessories} />
<<<<<<< HEAD
            <Route exact path="/store/login" />
            <Route exact path="/store/logout" />
            <Route exact path="/store/signup" />
=======
            {/* <Route exact path="/store/login" /> */}
            <Route exact path="/store/logout" />
            {/* <Route exact path="/store/signup" /> */}
>>>>>>> reg
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
