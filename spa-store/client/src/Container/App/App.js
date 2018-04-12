import React, { Component } from 'react';
// import './App.css';
import Registration from '../../Components/Registration/Registration';
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
          <Registration />
      </Modal>
        
      </div>
    );
  }
}

export default App;
