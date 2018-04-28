import React, { Component } from "react";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import wetImg from '../../../Assets/Images/wetsuit.jpg';
import API from "../../../utils/API";
import Sort from "../../../utils/Sort";
import ItemCards from '../../ItemCards/ItemCards';
import Modal from "../../UI/Modal/modal";
import SingleItem from '../../UI/SingleItem/SingleItem';
import classes from './wetsuits.css';

class Wetsuits extends Component {

    state = {
        items: [],
        loading: true,
        featured:{},
        itemModal: false,
        cart: []
    };

    componentDidMount() {
        this.loadWetsuits();
        this.loadCart();
    }

    modalHandler = (id) => {
        API.searchItem(id)
            .then(res => {
                this.setState({
                    featured: res.data
                });

                this.setState({ itemModal: true });
            }).catch(err => {
                this.setState({ loading: false });
            });
    }

    modalCancelHandler = () => {
        this.setState({
            featured: {},
            itemModal: false
        });
    }

    orderHandler = (id) => {
        
        if(this.state.cart.length === 0){
            API.createOrder(id, this.state.featured.toString())
               .then((res) => {
                   this.setState({
                       cart: res.data,
                       itemModal: false
                   });
               });
        }
        else{

            var cart = this.state.cart;
            cart.push(this.state.featured);
            API.updateOrder(id, this.state.cart.toString())
               .then((res) => {
                   this.setState({
                       cart: res.data,
                       itemModal: false
                   });
               });
        }
    }

    loadWetsuits(){
        API.searchItems('wetsuits')
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

    loadCart(userID){
        API.searchOrder(userID)
           .then(res => {
               this.setState({
                   cart: res.data
               });
           });
    }

    render() {
        return (
            <div className={classes.mainBox}>
                <Header
                    image={wetImg}
                    title='Wetsuits' />
                <Filter />
                <div className={classes.ItemBox}>
                    {this.state.items.map(item => (
                        <ItemCards
                            key={item.id}
                            price={item.price}
                            ItemTitle={item.name}
                            itemName={item.name}
                            itemPic={item.image}
                            brand={item.brand}
                            gender={item.gender}
                            click={() => this.modalHandler(item._id)}
                        />
                    ))}
                </div>
                <Modal show={this.state.itemModal}
                    modalClosed={this.modalCancelHandler}>
                    <SingleItem singleItemPic={this.state.featured.image}
                        singlePicInfo={this.state.featured.name}
                        singleItemName={this.state.featured.name}
                        singleItemBrand={this.state.featured.brand}
                        singleItemPrice={this.state.featured.price}
                        sizes={this.state.featured.sizes} 
                        orderHandler={this.props.cart}
                        />
                </Modal>

            </div>
        );
    }
}

export default Wetsuits;
