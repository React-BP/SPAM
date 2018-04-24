import React, { Component } from "react";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import accesoriesImg from '../../../Assets/Images/pipeline.jpg';
import API from "../../../utils/API";
import ItemCards from '../../ItemCards/ItemCards';
import Modal from "../../UI/Modal/modal";
import SingleItem from '../../UI/SingleItem/SingleItem';
import classes from './accessories.css';

class Accessories extends Component {
    state = {
        items: [],
        loading: false,
        featured: {},
        itemModal: false
    };

    componentDidMount() {
        this.loadAccessories();
    }

    modalHandler=()=>{
        this.setState({itemModal:true});
    }
    modalCancelHandler=()=>{
        this.setState({itemModal:false});
    }

    loadAccessories(){
        API.searchItems('accessories')
            .then(res => {

                const fetched = [];
                for (let key in res.data) {
                    fetched.push({
                        ...res.data[key],
                        id: key
                    });
                }

                this.setState({
                    loading: false,
                    items: fetched
                });

            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    loadItem(id) {
        API.searchItem(id)
            .then(res => {
                this.setState({
                    featured: res.data
                });
            }).catch(err => {
                this.setState({ loading: false });
            })
    }


    render() {
        return (
            <div className={classes.mainBox}>
                <Filter />
                <Header
                    image={accesoriesImg}
                    title=' Accessories' />
                    {/* map out the results from the backend query and use this component to display, ItemName and ItemTitle are the same value */}
                {/* <ItemCards price={}
                ItemTitle={}
                itemName={}
                itemPic={}
                click={}               
                />
                <Modal show={this.state.itemModal}
                modalClosed={this.modalCancelHandler}>
                    <SingleItem singleItemPic={}
                    singlePicInfo={}
                    sizes={}/>
                </Modal> */}

            </div>
        );
    }
}

export default Accessories;
