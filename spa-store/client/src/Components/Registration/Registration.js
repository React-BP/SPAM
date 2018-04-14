import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import classes from './registration.css';
import logoImg from "../../assets/Images/reactBP.png";
class Registration extends Component {
   state={
      name: '',
      email: '',
      password: '',
      username: ''
   }
   render() {
       var style = {
           image: {
               width: 125,
               height: 100,               
           }
       }
      let form = (
         <form>
             <div className={classes.LogoModal}>
                 <i><img src={logoImg} style={style.image} alt='logo' /></i>
             </div>
             <span className={classes.TitleModal}>Sign Up</span>
             <div>
                 <h1>Google sign in box</h1>
             </div>
              <div className='Or'>
                  <h2><span>Or</span></h2>
              </div>
              <Input inputtype='register'
                     type='text' 
                     name='name' 
                     label='Full Name'
                     placeholder='Full Name' />
              <Input inputtype='register' 
                    //  icon='fas fa-envelope' 
                     label='Email' 
                     type ='email' 
                     name='email' 
                     placeholder='Email' />
            <Input inputtype='register' 
                    //  icon='fas fa-user' 
                     label='Username' 
                     type='username' 
                     name='username' 
                      placeholder='username' />
              <Input inputtype='register' 
                    //  icon='fas fa-lock' 
                     label='Password' 
                     type='password' 
                     name='password' 
                     placeholder='password'/>
                    
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