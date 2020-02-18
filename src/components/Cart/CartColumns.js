import React from 'react';

export default function CartColumns(value) {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-12 mx-auto col-lg-2">
                    <p className="text-uppercase">Groceries</p>
                </div>
                {/* <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase">Name of product</p>
                </div> */}
                <div className="col-12 mx-auto col-lg-2">
                    <p className="text-uppercase">Final Price</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <p className="text-uppercase">Quantity</p>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <p className="text-uppercase">Remove</p>
                </div>
                <div className="col-12 mx-auto col-lg-4">
                </div>
            </div>
        </div>
    );
}


