import React from "react";
import "./Filter.css";

const Filter = () => (

    <div className="btn-group dropright">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Filter and Sort
        </button>
        <div className="dropdown-menu">
            <h5 className="dropdown-item">Men's</h5>
            <h5 className="dropdown-item">Women's</h5>
            <h5 className="dropdown-item">Low Price to High Price</h5>
            <h5 className="dropdown-item">High Price to Low Price</h5>
        </div>
    </div>

);

export default Filter;