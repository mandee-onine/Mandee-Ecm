import React from 'react'
import { Link } from "react-router-dom";
import { ButtonContainer } from './Button';
import Footer from './Footer/Footer';
import './Navbar.css'

export default function ManageDetails() {
    return (
        <div>
            <div className="container-fluid text-left" style={{ marginTop: "60px", marginLeft: "30px", fontSize: "13px", lineHeight: "2rem" }}>
                <div className="row">
                    <div className="col-12 mx-auto col-lg-4">

                        <h4><i className="fas fa-list" /> Order Details</h4>
                        <Link to="/LiveOrders">
                            <ButtonContainer>Live Orders</ButtonContainer>
                        </Link>

                        <Link to="/Returns">
                            <ButtonContainer>Returns</ButtonContainer>
                        </Link>
                        <br />
                        <Link to="/PastOrders">
                            <ButtonContainer>Past Orders</ButtonContainer>
                        </Link>

                        <Link to="/Cancellations">
                            <ButtonContainer>Cancellations</ButtonContainer>
                        </Link>

                    </div>
                    <div className="col-12 mx-auto col-lg-4">
                        <h4>Payment Details</h4>
                        <ul class="account-profile-list">
                            <li>credit limit: ₹{}</li>
                            <li>credit available: ₹{}</li><br />
                            <li style={{ color: "#F45963" }}>outstanding: ₹{}</li>
                            <li style={{ color: "#F45963" }}>overdue: ₹{}</li>
                        </ul>
                    </div>

                    <div className="col-12 mx-auto col-lg-4"></div>

                </div>
            </div>

            <div className="container-fluid text-left" style={{
                marginTop: "60px", marginLeft: "30px", fontSize: "13px", lineHeight: "2rem"
            }}>
                <div className="row">
                    <div className="col-12 mx-auto col-lg-4">
                        <h4><i class="fas fa-user-circle"></i> Account Details</h4>
                        <Link to="/DocumentsUpload">
                            <ButtonContainer>{}Documents Uploaded</ButtonContainer>
                        </Link><br />
                        <Link to="/SavedAddresses">
                            <ButtonContainer>{}Saved Addresses</ButtonContainer>
                        </Link>
                    </div>
                    <div className="col-12 mx-auto col-lg-4 text-size-10px">
                        <h4>Feedback & Grievances</h4>
                        <div className="row">
                            <div className="col-2.3">
                                <ul>
                                    <li>Write to us:</li>
                                    <li>Call us:</li>
                                    <li>Grievance Officer: </li>
                                    <li>(Rajeev Ranjan): </li>
                                </ul>
                            </div>
                            <div className="col-1.7">
                                <ul>
                                    <li>grievance@mandeeonline.com</li>
                                    <li>080-25721081</li>
                                    <li> grievance@mandeeonline.com</li>
                                    <li> 080-25721081</li>
                                </ul>
                            </div>
                        </div>
                        <p>We are available Monday to Sunday, 9am-6pm.</p>
                    </div>
                    <div className="col-12 mx-auto col-lg-4">
                        <h4>Settings</h4>
                        <Link to="/">
                            <ButtonContainer>Change Password</ButtonContainer>
                        </Link>
                        <Link to="/">
                            <ButtonContainer>Logout</ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div><br />
            <Footer />
        </div >
    );
}
