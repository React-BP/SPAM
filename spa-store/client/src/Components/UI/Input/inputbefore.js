import React from 'react';
import classes from './Input.css';


const input = (props) => {
    let inputEl = null;

    switch (props.inputtype) {
        case ('login'):
            inputEl = <input className={classes.InputEl} {...props} />
            break;
        case ('register'):
            inputEl = (
                <div>
                    <div className={classes.InputDiv}>
                        <span className={props.icon}></span>
                        <input className={classes.InputEl} {...props} />
                    </div>
                </div>
            )
            break;
        default:
            inputEl = <input className={classes.InputEl} {...props} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputEl}
        </div>
    );
};

export default input;