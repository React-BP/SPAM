import React from 'react';
import classes from "./Header.css";

const Header = (props) => {
   return (
      <div>
         <div className={classes.Picture}>
            {props.image}
         </div>
      </div>
   );
};

export default Header;