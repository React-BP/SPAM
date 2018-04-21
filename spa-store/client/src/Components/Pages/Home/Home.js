import React from "react";
import "./Home.css";
<<<<<<< HEAD
import homeImage from "../../../Images/homeImage.jpg";

const Home = () => (
    <div className="content-container">
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Boiler-Plate Boards</h1>
                <h2 className="lead">
                    This is a boiler plate for a shopping application built on the MERN Stack. 
                </h2>
            </div>
        </div>
        <img className="home-image" src={homeImage} alt="home-image"/>
    </div>
);

=======
import Header from '../../Header/Header';
import Featured from '../../Feature/Feature';


import homeImage from "../../../assets/Images/homeImage.jpg";
import img from '../../../assets/Images/reactBP.png';
import classes from './Home.css';

const Home = () => {

    return(
       <div className={classes.mainBox}>
        <Header 
        image={homeImage}
        title='Home Page Store'/>
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
>>>>>>> reg
export default Home;
