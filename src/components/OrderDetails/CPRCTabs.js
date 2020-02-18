import React from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';


export default function CPRCTabs() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row" style={{ fontSize: "20px" }}>
                <div className="col-12 mx-auto text-left col-lg-1">
                    <Link to="/ManageDetails">
                        <i class="fas fa-arrow-left" /> Back
                        </Link>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <Link to="/CurrentOrders">
                        Current Orders
                        </Link>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <Link to="/PastOrders">
                        Past Orders
                        </Link>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <Link to="/Returns">
                        Returns
                        </Link>
                </div>
                <div className="col-12 mx-auto col-lg-2">
                    <Link to="/Cancellations">
                        Cancellations
                        </Link>
                </div>
            </div>
        </div>
    )
}


