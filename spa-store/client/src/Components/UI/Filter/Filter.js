import React, { Component } from 'react';
import classes from "./Filter.css";




class Filter extends Component {
    constructor() {
        super();
        this.state = {
            showFilter: false,
        }
        this.showFilter = this.showFilter.bind(this);
        this.closeFilter = this.closeFilter.bind(this);
    }
    
    
    showFilter(event){
        event.preventDefault();
        this.setState({showFilter:true},()=>{
            document.addEventListener('click',this.closeFilter);
        });
    }
    closeFilter(event){
        const clicked= event.target;
         if(!this.dropdownMenu.contains(clicked)){
        this.setState({ showFilter: false }, () => {
            document.removeEventListener('click', this.closeFilter);
        });
        }       
        
    }
        

    render() {
        return (
            <div>
                <button onClick={this.showFilter}>Filter</button>
                    {this.state.showFilter
                    ?   (
                        <div className={classes.menu} ref={(element)=>{this.dropdownMenu = element;}}>
                                <button>Men's</button>
                                <button>Women's</button>
                                <button>Low Price to High Price</button>
                                <button>High Price to Low Price</button>
                        </div>
                        )
                        :(null)                       
                    }
            </div>
        );
    }
}

export default Filter;
