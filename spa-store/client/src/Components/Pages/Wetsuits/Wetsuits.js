import React, { Component } from "react";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import wetImg from '../../../Assets/Images/wetsuit.jpg';
import Featured from '../../Feature/Feature';
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
        itemModal: false
    };

    componentDidMount() {
        this.loadWetsuits()
    }
    modalHandler = () => {
        this.setState({ itemModal: true });
    }
    modalCancelHandler = () => {
        this.setState({ itemModal: false });
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

    render() {
        return (
            <div className={classes.mainBox}>
                <Filter />
                <Header
                    image={wetImg}
                    title='Wetsuits' />
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
                            click={this.modalHandler}
                        />
                    ))}
                </div>
                <Modal show={this.state.itemModal}
                    modalClosed={this.modalCancelHandler}>
                    <SingleItem singleItemPic={this.state.featured.image}
                        singlePicInfo={this.state.featured.name}
                        sizes={this.state.featured.sizes} />
                </Modal>

            </div>
        );
    }
}

export default Wetsuits;
