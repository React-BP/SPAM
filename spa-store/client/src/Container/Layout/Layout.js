import React, { Component } from 'react';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import classes from './layout.css';
import Footer from "../../Components/Footer/Footer";

class Layout extends Component {
    state = {
        visible: false
    }
    sideDrawerClosed = () => {
        this.setState({ visible: false });
    }
    sideDrawerHandler = () => {
        this.setState((prevState) => {
            return { visible: !prevState.visible }
        });
    }
    render() {
        return (
            <div >
                <Toolbar drawerToggleClicked={this.sideDrawerHandler} />
                <SideDrawer open={this.state.visible} closed={this.sideDrawerClosed} />
                <main className={classes.mainContainer}>
                    {this.props.children}                  
                </main>  
                <Footer />              
            </div>
            
        );
    }
};

export default Layout;