import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import classes from './registration.css';
class Registration extends Component {
   state={
      name: '',
      email: '',
      password: '',
      username: ''
   }
   render() {
      let form = (
         <form>
            <Input inputtype='register' type='text' name='name' placeholder='Full Name' />
            <Input inputtype='register' type ='email' name='email' placeholder='Email' />
            <Input inputtype='register' type='username' name='username' placeholder='username' />
            <Input inputtype='register' type='password' name='password' placeholder='password'/>
            
         </form>
      )
      return (
         <div className={classes.RegBox}>
            {form}
         </div>
      );
   }
}

export default Registration;