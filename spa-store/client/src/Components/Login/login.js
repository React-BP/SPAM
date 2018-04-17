import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/button';
import logoImg from "../../assets/Images/reactBP.png";
import googleImg from '../../assets/Images/googleSignIn.png';
import classes from "./login.css";
import axios from 'axios';
import swal from 'sweet-alert';

class login extends Component {

   state={
      userInput:{
         username: {
            elementtype: 'login',
            elementConfig: {
               type: 'text',
               placeholder: 'Your Username'
            },
            value: '',
            label: 'Username',
            icon: 'fas fa-user',
            validation: {
               required: true,
            },
            valid: false,
            touched: false
         },
         password: {
            elementtype: 'login',
            elementConfig: {
               type: 'password',
               placeholder: 'Your Password',
            },
            value: '',
            label: 'Password',
            icon: 'fas fa-lock',
            validation: {
               required: true,
               regexpass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            },
            valid: false,
            touched: false
         }
      },
      formIsValid: false
   }

   loginHandler = (event) =>{
      event.preventDefault();
      const formData = {};
      for (let formElementIdentifier in this.state.userInput) {
         formData[formElementIdentifier] = this.state.userInput[formElementIdentifier].value;
      }
      console.log(formData);

      axios.post('/api/login', formData).then(response => {
         console.log(response);
          swal("Thank you for registering with React BP. Please Login.");

      }).catch(error => {
         console.log(error.response);
      });
   }

   checkValidity = (value, rules) => {
      let isValid = true;
      if (rules.required) {
         isValid = value.trim() !== '' && isValid;
      }

      return isValid;
   }
   loginInputChange = (event, inputIndentifier) => {
      const updateUserInput = {
         ...this.state.userInput
      }
      const updatedUserElement = {
         ...updateUserInput[inputIndentifier]
      }
      updatedUserElement.value = event.target.value;
      updatedUserElement.valid = this.checkValidity(updatedUserElement.value, updatedUserElement.validation);
      updatedUserElement.touched = true;
      updateUserInput[inputIndentifier] = updatedUserElement;
   //   console.log(updatedUserElement);

      let formIsValid = true;
      for (let inputIndentifier in updateUserInput) {
         formIsValid = updateUserInput[inputIndentifier].valid && formIsValid;
      }
      console.log(formIsValid);
      this.setState({
         userInput: updateUserInput,
         formIsValid: formIsValid
      });
   };

   render() {
      const formElementsArr = [];
      for (let key in this.state.userInput) {
         formElementsArr.push({
            id: key,
            config: this.state.userInput[key]
         })
      }
      // console.log(formElementsArr);
      var style = {
         image: {
            width: 125,
            height: 100,
         }
      }
      let form = (
         <form onSubmit={this.registrationHandler}>
            <div className={classes.LogoModal}>
               <i><img src={logoImg} style={style.image} alt='logo' /></i>
            </div>
            <span className={classes.TitleModal}>Sign Up</span>
            <div className={classes.googleBtn}>
               <img src={googleImg} alt="Google Sign In Btn" />
            </div>
            <div className='Or'>
               <h2><span>Or</span></h2>
            </div>
            {formElementsArr.map(loginEl => {
               return (
                  <Input key={loginEl.id}
                     elementType={loginEl.config.elementtype}
                     elementConfig={loginEl.config.elementConfig}
                     value={loginEl.config.value}
                     label={loginEl.config.label}
                     icon={loginEl.config.icon}
                     invalid={!loginEl.config.valid}
                     touched={loginEl.config.touch}
                     change={(event) => this.loginInputChange(event, loginEl.id)}
                  />
               )
            })}
            <Button btnType='Success' clicked={this.loginHandler} disabled={!this.state.formIsValid}>Create Account</Button>
         </form>
      )
      return (
         <div >
            {form}
         </div>
      );
   }
}

export default login;