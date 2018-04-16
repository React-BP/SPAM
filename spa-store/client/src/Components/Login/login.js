import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/button';
import logoImg from "../../assets/Images/reactBP.png";
import classes from "../Registration/registration.css";
import axios from 'axios';

class login extends Component {

   state={
      userInput:{
         username: {
            elementtype: 'login',
            elementConfig: {
               type: 'username',
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
         },
         valid: false,
         touched: false
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
         // swal("Thank you for registering with React BP. Please Login.");

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

   handleInputChange = (event, inputIndentifier) => {
      const updatedUserInput = {
         ...this.state.userInput
      }
      const updatedUserElement = {
         ...updatedUserInput[inputIndentifier]
      }
      updatedUserElement.value = event.target.value;
      updatedUserElement.valid = this.checkValidity(updatedUserElement.value, updatedUserElement.validation);
      updatedUserElement.touched = true;
      updatedUserInput[inputIndentifier] = updatedUserElement;
       console.log(updatedUserElement);

      let formIsValid = true;
      for (let inputIndentifier in updatedUserInput) {
         formIsValid = updatedUserInput[inputIndentifier].valid && formIsValid;
      }
      console.log(formIsValid);
      this.setState({
         regInput: updatedUserInput, formIsValid: formIsValid
      });
   };


   render() {
      const formElArr = [];
      for (let key in this.state.userInput) {
         formElArr.push({
            id: key,
            config: this.state.userInput[key]
         })
      }
       console.log(formElArr);

      var style = {
         image: {
            width: 125,
            height: 100,
         }
      }
      let form = (
         <form onSubmit={this.loginHandler}>
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
            {formElArr.map(formEl => {
               return (
                  <Input key={formEl.id}
                     elementType={formEl.config.elementtype}
                     elementConfig={formEl.config.elementConfig}
                     value={formEl.config.value}
                     label={formEl.config.label}
                     icon={formEl.config.icon}
                     invalid={!formEl.config.valid}
                     touched={formEl.config.touch}
                     change={(event) => this.handleInputChange(event, formEl.id)}
                  />
               )
            })}
            <Button btnType='Success' disabled={!this.state.formIsValid}>Create Account</Button>
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