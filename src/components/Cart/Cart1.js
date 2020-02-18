/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import './Cart.css'
import './Css/default.css'
import './Css/main.css'
import './Css/mandee.css'
import './Css/meanmenu.css'
import './Css/nice-select.css'
import './Css/slick.css'

export default class Cart1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div class="border-bottoms" id="{{ItemID}}">
                    <div class="groceriy-list mb-30">
                        <div class="groceriy-list-item">
                            <div class="groceriy-list-img"><img src="{{ImageURL}}" alt="product" /></div>
                            <div class="groceriy-list-text">
                                <h4 class="Product">{}</h4>
                                <a class="Save-For-Later" style={{ color: "#86AFFF !important", cursor: "pointer;" }}
                                    onClick="SaveForLater('{{}}')">save for later</a>
                            </div>


                        </div>
                        <div class="groceriy-list-item-2">
                            <h4 class="price">₹ {}</h4>
                            <h5 class="smprice">₹ {} x {}</h5>
                            <h6 class="deliverydate">delivery on: {}</h6>
                            <h6 class="deliverydate" style={{ paddingTop: "10px" }}>DiscountAmount: {}</h6>
                        </div>
                        <div class="groceriy-list-item-3" id="quality5{{ControlID}}">
                            <div class="dropdown">
                                <div class="input-group">
                                    <div class="input-group-btn">
                                        <button class="btn btn-info btn-md dropdown-toggle qtybtn" type="button"
                                            id="dropdownMenuButton{{ControlID}}" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" style={{ backgroundColor: "#588c7e;" }}>
                                            QTY
                        </button>

                                        <div class="dropdown-menu" id="ddldropdown" aria-labelledby="dropdownMenuButton">
                                            <a class="dropdown-item" href="#">1 </a>
                                            <a class="dropdown-item" href="#">2 </a>
                                            <a class="dropdown-item" href="#">3 </a>
                                            <a class="dropdown-item" href="#">4</a>
                                            <a class="dropdown-item" href="#">5</a>
                                            <a class="dropdown-item" href="#">5+</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <a class="Save-For-Later" onClick="UpdateCartItems('{ControlID}');"
                                style={{ textTransform: "capitalize", color: "#86AFFF", lineHeight: "1", cursor: "pointer" }}>Update cart</a>

                        </div>

                        <div class="groceriy-list-item-3" id="quality6{{ControlID}}">
                            {/* <div class="value-button" id="decrease" onClick="decreaseValue('{{ControlID}}')" value="Decrease Value">-
            </div>
                            <input type="number" id="number{{ControlID}}" class="inputQty" />
                            <div class="value-button" id="increase" onClick="increaseValue('{{ControlID}}')" value="Increase Value">+
            </div> */}
                            {/* <div>
                                <a class="Save-For-Later" onClick="UpdateCartItems('{{ControlID}}');"
                                    style={{ textTransform: "capitalize", color: "#86AFFF", lineHeight: "1", cursor: "pointer" }}>Update cart</a>
                            </div> */}
                        </div>
                        <div>
                            <div class="groceriy-list-item-4">
                                <img id="RemoveItem{{ItemID}}" src="" style={{ cursor: "pointer" }}
                                    onClick="RemovecartItem('{{ItemID}}')" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pay-ment-card-body">
                    <div class="pay-ment-card-item">
                        <h4> subtotal {} <span>₹ {}</span></h4>
                        <h5> discount <span>₹ {}</span></h5>
                    </div>
                    <div class="pay-ment-card-item">
                        <h4> total <span id="NetReceivable">₹ {}</span></h4>
                        <h5> available credit <span id="AvailableCredit">₹ {}</span></h5>
                        <h5> payment on delivery <span id="Payincash">₹ {}</span></h5>
                    </div>
                    <div class="pay-ment-card-item">

                        <div id="imgdeliveryDate" class="d-flex">
                            <div id="imgtruck">
                                <i className="fas fa-truck" />
                            </div>
                            <div id="Date" style={{ marginLeft: "10px", marginTop: "5px;" }}>
                                <h4>delivery on <b>{}</b></h4>
                            </div>
                        </div>
                    </div>
                    <h3>apply coupon</h3>
                    <div class="form">
                        <form action="">
                            <input type="text" placeholder="enter code" id="txtCoupon" />
                            <button onClick="validateCoupon(); return false">apply</button>
                        </form>
                    </div>
                    <div class="invalid-feedback" style={{ width: "max-content !important", textAlign: "center !important" }}
                        id="divApplyCoupon">
                        <span id="spnCoupon"></span>
                    </div>
                </div>




                <li class="lisaved" id="{{ProductCode}}" onClick="SaveItems('{{ProductCode}}')">
                    {}
                </li>

                {/* <div class="loader"></div> */}
                <div id="headercontainer"></div>
                <main class="movecontent">
                    <section class="groceriy-list-wrapper">
                        <div class="container-fluid pl-40 pr-20">
                            <div class="row  justify-content-between">
                                <div class="track-area">
                                </div>
                                <div class="groceriy-list-dots">
                                    <div class="groceriy-list-dot">
                                        <span class="gray active"></span>
                                        <h6>cart</h6>
                                    </div>
                                    <div class="groceriy-list-dot">
                                        <span class="gray"></span>
                                        <h6>address</h6>
                                    </div>
                                    <div class="groceriy-list-dot">
                                        <span class="gray "></span>
                                        <h6>payment</h6>
                                    </div>
                                    <div class="groceriy-list-dot">
                                        <span class="gray "></span>
                                        <h6>order Placed</h6>
                                    </div>
                                </div>
                            </div>
                            <div class="location-area d-md-flex justify-content-between">
                            </div>
                            <div class="row" style={{ marginTop: "-20px" }}>
                                <div class="col-md-7 col-lg-8 col-xl-9">
                                    <div class="resposive">
                                        <div class="col-xl-12 mb-30 px-0" id="groceryproducts">


                                        </div>

                                    </div>

                                </div>
                                <div class="col-md-5 col-lg-4 col-xl-3">
                                    <div class="pay-ment-card">
                                        <div id="paymentDet"></div>
                                        <div class="payment-btns">
                                            <a style={{ color: "#fff !important", cursor: "pointer !important", textTransform: "none" }}
                                                onClick="checkCartCount()">Choose a Delivery Address</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div id="Footer">
                    </div>
                </main>

                <button type="button" id="Wishist" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"
                    style={{ display: "none;" }}>
                    wishList
</button>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true">
                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="savedlisttitle">Saved Lists</h5>
                                <a href="#" style={{ textDecorationColor: "ActiveBorder" }}>
                                    <span aria-hidden="true" id="createnew" onClick="CreateSavedList()">+Create New</span>
                                </a>
                            </div>
                            <div class="modal-body" id="SavedlistItems" style={{ maxHeight: "calc(100vh - 220px)", overflowY: "auto;" }}>
                                <p style={{ fontSize: "18px;" }}>Select One From The Existing Lists</p>
                                <ul id="listItems"></ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal" id="savedlistclose">Close</button>
                                <button type="button" class="btn btn-primary" id="CreateWishList" data-dismiss="modal">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" id="savedlist" class="btn btn-primary" data-toggle="modal" data-target="#myModal"
                    style={{ display: "none;" }}>
                    Launch demo modal
</button>
                <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">

                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Create New Saved list</h4>
                                <button type="button" id="closesavedlist" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form class="form-savedList" style={{ width: "100%", textAlign: "inherit !important" }} role="form">
                                    <div style={{ marginLeft: "19px;" }}><label>Saved List</label></div>
                                    <div class="col-lg-12">
                                        <input type="text" class="form-control" maxlength="25" id="listName"
                                            style={{ width: "-webkit-fill-available !important;" }} placeholder="Saved List name" required />
                                        <div class="invalid-feedback">
                                            Please provide a saved list name.
                        </div>
                                    </div>
                                </form>
                                <div style={{ padding: "15px;" }}>
                                    <button type="button" id="Productcode" style={{ color: "White", marginLeft: "42%;" }}
                                        class="btn btn-primary btn-sm">
                                        save
                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="popover-content" class="hide" style={{ display: "none;" }}>
                    <form class="form-inline" style={{ width: "100%", textAlign: "inherit!important" }} role="form">
                        <div class="form-group" id="divpopover">
                            <input type="text" class="form-control" id="pincode" maxlength="6" onkeypress='return isNumberKey(event)'
                                placeholder="Enter your pincode" name="pincode" style={{ width: "137px", paddingLeft: "5px;" }} required />
                            <button class="btn btn-success btn-circle btn-circle-sm m-1" onClick="fnLocationChange()">GO</button>

                        </div>
                    </form>
                    <span class="error"> </span>
                    <hr class="popover-hr" />
                    <div style={{ textAlign: "center" }}>
                        <a id="AllLocations" style={{ color: "blue", fontSize: "12px", textDecoration: "underline", cursor: "pointer" }}
                            onClick="FnLocations()">View All Locations</a>
                    </div>
                </div>



                <button type="button" id="GetLocations" class="btn btn-primary" data-toggle="modal" data-target="#Locations"
                    style={{ display: "none;" }}>
                    Locations
</button>
                <div class="modal fade" id="Locations" role="dialog">
                    <div class="modal-dialog modal-dialog-centered" role="document">

                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">All Locations</h4>
                                <button type="button" id="close" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body" style={{ alignItems: "center", maxHeight: "calc(100vh - 220px)", overflowY: "auto;" }}>
                                <div id="AddressLocations"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

