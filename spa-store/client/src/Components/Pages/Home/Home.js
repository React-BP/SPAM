import React from "react";
import "./Home.css";
import Header from '../../Header/Header';
import Featured from '../../Feature/Feature';
<<<<<<< HEAD


import homeImage from "../../../Assets/Images/pipeline.jpg";
import img from '../../../Assets/Images/reactBP.png';
=======
import homeImage from "../../../assets/Images/homeImage.jpg";
import img from '../../../assets/Images/reactBP.png';
>>>>>>> master
import classes from './Home.css';

const Home = () => {

    return(
       <div className={classes.mainBox}>
        <Header 
        image={homeImage}
        title='Home Page Store'/>
            <h1 className={classes.FeaturedTitle}>Featured Items</h1>
        <div className={classes.FeatureBox}>
          
            <Featured
                item1={img}
                ItemTitle='Item # 1'
                price='4.20'/>
            <Featured
                item1={img}
                ItemTitle='Item # 2'
                price='4.20' />
            <Featured
                item1={img}
                ItemTitle='Item # 3'
                price='4.20' />
            </div>    
    </div>
);
}
export default Home;
