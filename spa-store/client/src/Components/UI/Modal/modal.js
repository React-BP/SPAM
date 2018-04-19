import React, { Component } from 'react';
import classes from './modal.css';
import Backdrop from '../Backdrop/backdrop';
class modal extends Component {

   render() {
      return (
         <div>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
            {this.props.show && (
               <div className={classes.Modal}
                  style={{ transform: this.props.show ? 'translateY(0)' : 'translateY(-100)', opactity: this.props.show ? '1' : '0' }}>
                  {this.props.children}
               </div>
            )}          
         </div>
      );
   }
};

export default modal;