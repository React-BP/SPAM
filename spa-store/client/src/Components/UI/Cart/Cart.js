import React from "react";


const Cart = (props) => (

    <div className="btn-group dropright">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            View your Cart
        </button>
        <div className="dropdown-menu">
            <h5 className="dropdown-item">Example <span className="glyphicon glyphicon-remove"></span></h5>
        </div>
    </div>

);

export default Cart;