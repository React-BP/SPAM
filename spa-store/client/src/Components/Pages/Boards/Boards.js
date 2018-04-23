import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
import classes from './board.css';
import API from "../../../utils/API";
import Header from './../../Header/Header';
import boardImg from '../../../assets/Images/boards.JPG';

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

    loadSortedBoards(){
        API.searchSortedItems({
            type: 'surfboard',
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
                    image={boardImg}
                    title='Short &amp; Long Boards' />
                {/* <Results results={this.state.results} /> */}
            </div>
        );
    }
}

export default Boards;
