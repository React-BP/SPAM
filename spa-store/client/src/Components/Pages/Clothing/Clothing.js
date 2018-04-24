import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
import Header from './../../Header/Header';
import clothingImg from '../../../Assets/Images/clothing.jpg';
import API from "../../../utils/API";

class Clothing extends Component {
    state = {
        items: [],
        loading: true,
        featured: {}
    };

    componentDidMount() {
        this.loadClothing();
    }

    loadClothing(){
        API.searchItems('clothing')
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

export default Clothing;
