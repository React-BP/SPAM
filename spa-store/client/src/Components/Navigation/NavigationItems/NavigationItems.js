import React, {Component} from "react";
// import { Link } from "react-router-dom";
import NavButton from "./NavButton/NavButton";
import classes from "./NavItems.css";
import Login from '../../Auth/Login/login';
import Registration from "../../Auth/Registration/Registration";
import Modal from '../../UI/Modal/modal';


class NavigationItems extends Component{   
    state = {
        modalLog: false,
        modalReg: false,
        loggedIn: false
    }

    loginHandler = () => {
        this.setState({ modalLog: true });
    }
    registerHandler = () => {
        this.setState({ modalReg: true });
    }
    loginCancelHandler = () => {
        this.setState({ modalLog: false });
    }
    regCancelHandler = () => {
        this.setState({ modalReg: false });
    }
    logIn=()=>{
        this.setState({
            loggedIn:true
        })
    }
    logOut=()=>{
        this.setState({
            loggedIn: false
        })

    }
   
    render(){
        let logRegBtn =
            (
                <div className={classes.logRegBtn}>
                    <a onClick={this.loginHandler}>Login</a>
                    <a onClick={this.registerHandler}>Register</a>
                </div>
            )
        if(this.state.loggedIn){
             logRegBtn =(
                <div className={classes.logRegBtn}>
                    <a onClick={this.logOut}>Sign Out</a>
                </div>
            )
        }
        
        return (
            <div>
                <ul className={classes.NavigationItems}>
                    <Modal show={this.state.modalLog} modalClosed={this.loginCancelHandler}>
                        <Login cancelModal={this.loginCancelHandler}
                                logIn={this.logIn}/>
                    </Modal>
                    <Modal show={this.state.modalReg} modalClosed={this.regCancelHandler}>
                        <Registration cancelModal={this.regCancelHandler}/>
                    </Modal>

                    <NavButton link='/' exact>Store</NavButton>
                    <NavButton link='/store/wetsuits' exact>Wetsuits</NavButton>
                    <NavButton link='/store/boards' exact>Boards</NavButton>
                    <NavButton link='/store/clothing' exact>Clothing</NavButton>
                    <NavButton link='/store/accessories' exact>Accessories</NavButton>
                    <NavButton link='/store/checkout'></NavButton>
                        {logRegBtn}                    
                   
                </ul>
            </div>
        );

    }
}
export default NavigationItems;