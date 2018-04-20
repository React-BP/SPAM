import React, { Component } from 'react';
// import './App.css';
// import Registration from '../../Components/Auth/Registration/Registration';
import Login from "../../Components/Auth/Login/login";
import Modal from '../../Components/UI/Modal/modal';
import Registration from '../../Components/Auth/Registration/Registration';
import Layout from './../Layout/Layout';

class App extends Component {
  state={
    modalLog: false,
    modalReg: false
  }

  loginHandler = () => {
    this.setState({ modalLog: true });
  }
  registerHandler = ()=>{
    this.setState({ modalReg: true });
  }
  loginCancelHandler = ()=>{
    this.setState({ modalLog: false});
  }
  regCancelHandler = ()=>{
    this.setState({ modalReg: false});
  }

  


  render() {
    let logRegBtn =
      (
        <div>
          <button onClick={this.loginHandler}>Login</button>
          <button onClick={this.registerHandler}>Register</button>
        </div>
      )
    return (
      <div className="App">
      <Layout>
      <Modal show={this.state.modalLog} modalClosed={this.loginCancelHandler}>
          <Login />
      </Modal>
      <Modal show={this.state.modalReg} modalClosed={this.regCancelHandler}>
        <Registration/>
      </Modal>
        {logRegBtn}
      </Layout>
      </div>
    );
  }
}

export default App;
