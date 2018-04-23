import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
import classes from './accessories.css';
import API from "../../../utils/API";
import Header from './../../Header/Header';
import accesoriesImg from '../../../assets/Images/pipeline.jpg';

class Accessories extends Component {
    state = {
        items: [],
        loading: false,
        featured: {}
    };

    componentDidMount() {
        this.loadAccessories();
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

    loadSortedAccessories(){
        API.searchItems({
            type: 'accessories',
            sort: 'price'
        })
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
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Accessories;
