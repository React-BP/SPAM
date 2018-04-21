import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import accesoriesImg from '../../../Assets/Images/pipeline.jpg';
import API from "../../../utils/API";

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
            <div className="content-container">
            </div>
        );
    }
}

export default Accessories;
