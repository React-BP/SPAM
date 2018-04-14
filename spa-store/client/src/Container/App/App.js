import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavigationItems from "../../Components/Navigation/NavigationItems/NavigationItems";
import Home from "../../Components/Pages/Home/Home";
import Wetsuits from "../../Components/Pages/Wetsuits/Wetsuits";
import Boards from "../../Components/Pages/Boards/Boards";
import Clothing from "../../Components/Pages/Clothing/Clothing";
import Accessories from "../../Components/Pages/Accessories/Accessories";

const App = () => (
  <Router>
    <div>
      <NavigationItems />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/wetsuits" component={Wetsuits}/>
        <Route exact path="/boards" component={Boards}/>
        <Route exact path="/clothing" component={Clothing}/>
        <Route exact path="/accessories" component={Accessories}/>
        <Route exact path="/login" />
        <Route exact path="/logout" />
        <Route exact path="/signup" />
      </Switch>
    </div>
  </Router>
);

export default App;
