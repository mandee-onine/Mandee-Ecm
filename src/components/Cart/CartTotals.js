import React from 'react'
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div>
                <div className="row">
                    <div className="col-4 mt-2 ml-sm-5 ml-md-auto col-sm-4 text-capitalize text-left">
                        <Link to="/cart">
                            <button className="btn btn-outline-danger"
                                type="button" onClick={() => clearCart()}>
                                Clear Cart
                             </button>
                        </Link>
                        <h5>SubTotal : <strong>{cartSubtotal}</strong>
                        </h5>

                        <h5>
                            Tax :<strong>{cartTax}</strong>
                        </h5>

                        <h5>
                            <span className="text-title">
                                Total :
                            </span>
                            <strong>{cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


