import React, { Component } from 'react';
// import './App.css';
// import Registration from '../../Components/Registration/Registration';
import Login from "../../Components/Login/login";
import Modal from '../../Components/UI/Modal/modal';

class App extends Component {
  state={
    modal: true
  }
  purchaseCancelHandler = () => {
    this.setState({ modal: false });
  }
  render() {
    return (
      <div className="App">
      <Modal show={this.state.purchasing} modalClosed=    {this.purchaseCancelHandler}>
          <Login />
      </Modal>
        
      </div>
    );
  }
}

export default App;
