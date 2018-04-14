import React from 'react';
import classes from './Input.css';


const input = (props) => {
      // console.log(props);
      let inputEl = null;
      let inputClasses = [classes.InputEl];

      if(props.invalid && props.touched){
            inputClasses.push(classes.Invalid)
      }

      switch (props.elementType) {
            case ('login'):
                  inputEl = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} />
                  break;
            case ('register'):
                  inputEl = (
                        <div>
                              <div className={classes.InputDiv}>
                                    <span className={props.icon}></span>
                                    <input className={inputClasses.join(' ')} {...props.elementConfig} 
                                    value={props.value} 
                                    onChange={props.change}
                                    />
                              </div>
                        </div>
                  )
                  break;
            default:
                  inputEl = <input className={inputClasses.join(' ')} {...props.elementConfig} 
                  value={props.value} />
      }

      return (
            <div className={classes.Input}>
                  <label className={classes.Label}>{props.label}</label>
                  {inputEl}
            </div>
      );
};

export default input;