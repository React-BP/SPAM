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

    modalHandler=(id)=>{

        this.setState({ itemModal: true });
        this.loadItem(id);
        
    }
    modalCancelHandler=()=>{
        this.setState({
            featured: {},
            itemModal:false
        });
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
                
                console.log(this.state.itemModal);
            }).catch(err => {
                this.setState({ loading: false });
            });
    }


    render() {
        return (
            <div className={classes.mainBox}>
                <Header
                    image={accesoriesImg}
                    title=' Accessories' />     
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
                        sizes={this.state.featured.sizes} />
                </Modal>


            </div>
        );
    }
}

export default Accessories;
