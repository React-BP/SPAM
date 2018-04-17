import React, { Component } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/button';
import classes from './registration.css';
import logoImg from "../../assets/Images/reactBP.png";
import googleImg from '../../assets/Images/googleSignIn.png';
// import swal from 'sweet-alert'
import axios from 'axios';
class Registration extends Component {

    state = {
        regInput: {
            name: {
                elementtype: 'register',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Full Name',
                },
                value: '',
                label: 'Full Name',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            email: {
                elementtype: 'register',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                label: 'Email',
                icon: 'fas fa-envelope',
                validation: {
                    required: true,
                    // regeExEmail: /^\S+@\S+\.\S+$/
                },
                valid: false,
                touched: false
            },
            password: {
                elementtype: 'register',
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
            username: {
                elementtype: 'register',
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
            }
        },
        formIsValid: false
    }
    registrationHandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in this.state.regInput) {
            formData[formElementIdentifier] = this.state.regInput[formElementIdentifier].value;
        }
        console.log(formData);

        axios.post('/api/register', formData).then(response =>{
            console.log(response);
            // swal("Thank you for registering with React BP. Please Login.");

        }).catch( error =>{
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
        const updatedRegInput = {
            ...this.state.regInput
        }
        const updatedRegElement = {
            ...updatedRegInput[inputIndentifier]
        }
        updatedRegElement.value = event.target.value;
        updatedRegElement.valid = this.checkValidity(updatedRegElement.value, updatedRegElement.validation);
        updatedRegElement.touched = true;
        updatedRegInput[inputIndentifier] = updatedRegElement;
        // console.log(updatedRegElement);

        let formIsValid = true;
        for (let inputIndentifier in updatedRegInput) {
            formIsValid = updatedRegInput[inputIndentifier].valid && formIsValid;
        }
        console.log(formIsValid);
        this.setState({
            regInput: updatedRegInput, formIsValid: formIsValid
        });
    };

    render() {
        const formElementsArr = [];
        for (let key in this.state.regInput) {
            formElementsArr.push({
                id: key,
                config: this.state.regInput[key]
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
                <div>
                    <img onClick={this.googleSignIn} className={classes.googleBtn} src={googleImg} alt="Google Sign In Btn" />
                </div>
                <div className='Or'>
                    <h2><span>Or</span></h2>
                </div>
                {formElementsArr.map(formEl => {
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
export default Registration;