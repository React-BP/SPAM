import React, { Component } from "react";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import boardImg from '../../../Assets/Images/boards.JPG';
import Featured from '../../Feature/Feature';
import API from '../../../utils/API';
import ItemCards from '../../ItemCards/ItemCards';
import Modal from "../../UI/Modal/modal";
import SingleItem from '../../UI/SingleItem/SingleItem';
import classes from "./boards.css";

class Boards extends Component {
    state = {
        items: [],
        loading: false,
        featured: {}
    };

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards(){
       API.searchItems('surfboard')
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
                
                <Header
                    image={boardImg}
                    title='Short &amp; Long Boards' />
                <Filter />
                {this.state.items.map(item => (
                    <Featured
                        item1={item.image}
                        ItemTitle={item.title}
                        price={item.price} />
                ))}
                {/* <ItemCards price={}
                ItemTitle={}
                itemName={}
                itemPic={}
                click={}               
                /> */}
                {/* <Modal show={this.state.itemModal}
                modalClosed={this.modalCancelHandler}>
                    <SingleItem singleItemPic={}
                    singlePicInfo={}
                    sizes={}/>
                </Modal> */}
            </div>
        );
    }
}

export default Boards;
