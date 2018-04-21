import React from 'react';
import classes from "./Header.css";

const Header = (props) => {
    const style={
        image:{
            width: '100%',
            height: 300
        }
    }
   return (
       <div className={classes.header}>
           <div className={classes.Title}>
               <h1 >{props.title}</h1>
           </div>
           <div >
               <img style={style.image} src={props.image} alt="Header" />
           </div>
       </div>
   );
};

export default Header;