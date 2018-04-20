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
        modalReg: false
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
   
    render(){
        let logRegBtn =
            (
                <div className={classes.logRegBtn}>
                    <button onClick={this.loginHandler}>Login</button>
                    <button onClick={this.registerHandler}>Register</button>
                </div>
            )
        return (
            <div>
                <ul className={classes.NavigationItems}>
                    <Modal show={this.state.modalLog} modalClosed={this.loginCancelHandler}>
                        <Login />
                    </Modal>
                    <Modal show={this.state.modalReg} modalClosed={this.regCancelHandler}>
                        <Registration />
                    </Modal>

                    <NavButton link='/' exact>Store</NavButton>
                    <NavButton link='/store/wetsuits' exact>Wetsuits</NavButton>
                    <NavButton link='/store/boards' exact>Boards</NavButton>
                    <NavButton link='/store/clothing' exact>Clothing</NavButton>
                    <NavButton link='/store/accessories' exact>Accessories</NavButton>
                        {logRegBtn}

                    {/* <NavButton link='/store/login' exact></NavButton>
                    <NavButton link='/store/logout'></NavButton> */}
                    <NavButton link='/store/signup' exact></NavButton>
                    <NavButton link='/store/checkout'></NavButton>
                </ul>
            </div>
        );

    }
}
export default NavigationItems;