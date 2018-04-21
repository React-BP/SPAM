import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
// import API from "../../../utils/API";
<<<<<<< HEAD
=======
import Header from './../../Header/Header';
import boardImg from '../../../assets/Images/boards.JPG';
>>>>>>> master

class Boards extends Component {
    state = {
        search: "",
        results: []
    };

    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
        //this.searchGiphy("surfers");
    }

    /**searchGiphy = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.data }))
            .catch(err => console.log(err));
    };**/

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className="content-container">
                <Filter />
                <Header
                    image={boardImg}
                    title='Short &amp; Long Boards' />
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Boards;
