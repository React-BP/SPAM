import React from "react";
import "./Home.css";
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

export default Home;
