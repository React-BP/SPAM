import React, { Component } from "react";
import Results from "./Results";
import Filter from "../../UI/Filter/Filter";
<<<<<<< HEAD
import API from "../../../utils/API";
=======
// import API from "../../../utils/API";
>>>>>>> reg

class Wetsuits extends Component {
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
                <Results results={this.state.results} />
            </div>
        );
    }
}

export default Wetsuits;
