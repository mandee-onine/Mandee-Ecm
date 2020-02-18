import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Navbar.css'
import DropdownBar from "./DropDown";
// import SignInForm from "../Component2/components/auth/login/LoginForm";

export default class Navbar extends Component {

  render() {
    return (
      <React.Fragment>

        {/* <div class="container-fluid">
          <div class="row d-flex align-items-center justify-content-between py-2">
            <div class="col-12 col-sm-4 col-md-5 d-none d-sm-block">
              <ul class="list-inline list-unstyled mb-0 d-flex align-items-center  d-none">
                <img src="" id="img_loc" style={{ display: "none" }} />
                <li class="list-inline-item d-none d-sm-none d-md-none d-lg-inline-block location-mr" id="lstdelivryloc" style={{ visibility: "hidden" }}>
                  <a href='#' class='lblDelivery' style={{ fontWeight: "normal !important;" }} data-html='true' data-toggle='popover' data-placement="bottom" title="Change Location" data-container="body"> Delivering to <br /><strong class="lblDelivery">
                    <span id="DeliveryLocation"></span></strong>
                  </a>
                </li>
                <li class="list-inline-item col-12 col-sm-12 col-md-8 p-0 ml-35">
                  <form action="">
                    <div class="input-group">
                      <input type="text" id="txtSearch" class="form-control bg-gray border-green no-outile-shadow border searchText" placeholder="Search for anything" aria-label="Search for anything" aria-describedby="button-addon2" onkeypress='return callSubmit(event)' />
                      <div class="input-group-append">
                        <button class="btn btn-outline-success btn-sm font-weight-bold bg-gray text-green" type="button" id="button-addon2" onclick="SearchProducts($('#txtSearch').val())">Search</button>
                      </div>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
            <div class="col-12 col-sm-2 col-md-2">
              <a href="/" id="lnk_logo"><img class="mx-auto d-block mb-2 mb-sm-0" src=" " alt="Mandee" /></a>
            </div>
            <div class="col-12 col-sm-6 col-md-5 quick-links" id="divManageAccount" style="display:none">
              <ul id="Credits" class="list-inline list-unstyled mb-0">
                <li class="list-inline-item credit mr-3 d-none d-sm-none d-md-none d-lg-inline-block" style={{ visibility: "visible;" }}>

                  <span id="spnRemCredit"></span>
                </li>
                <li class="list-inline-item">

                </li>
                <li class="list-inline-item">
                  <a href="Wishlist.html"><img src="../Assets/img/shop-list.svg" alt="chat" /></a>
                </li>
                <li class="list-inline-item" id="lstcart" style={{ display: "block" }}>

                  <a class="cart-icon" id="icon" href="Cart.html">
                    <span id="totalItems">0</span>
                  </a>
                </li>
                <li class="dropdown manage_account">
                  <a href="../HTML/AccountDetails.html" id="navbarDropdown" role="button">
                    <strong class="lblHelloMaster"><span id="spnlogonuser"></span></strong><br />
                    <span class="lblHelloMaster">Manage account</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-12 col-sm-6 col-md-5 quick-links" id="divLoginSignup" style={{ display: "block" }}>
              <ul class="list-inline list-unstyled mb-0" style={{ float: "right" }}>
                <li class="list-inline-item">
                </li>
                <li class="list-inline-item">
                </li>
                <li class="list-inline-item">
                </li>
                <li class="list-inline-item">
                  <a class="Cart_Empty"></a>
                </li>
                <li class="list-inline-item">
                  <a href="SignIn.html">
                    <strong class="st">Login</strong>
                  </a><span style={{ color: "#FAA519" }}> / </span>
                  <a href="Home.html"><strong class="st">Sign Up</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </ul>
        <div id="divmainmenu" class="collapse navbar-collapse"></div>
        <ul class="navbar-nav ml-auto cell-center">
          <li class="nav-item">

            <i class="fas fa-phone"></i>
          </li>
          <li class="nav-item mar-right" id="lstSalesAgent" style="display:none">
            <span id="spnSalesAgntName">
            </span>
            <h6 class="text-right" id="spnSalesAgntNum"></h6>
          </li>
          <li class="nav-item">
            <span>
              call center
            </span>
            <h6><span id="spnCallCenterNum"></span></h6>
          </li>
        </ul>
        </div>
     </nav > */}


        <nav className="navbar navbar-expand-sm">
          <i className="fas fa-map-marker-alt" style={{ fontSize: "20px" }} />
          <ul style={{ paddingLeft: "15px" }}>
            <li>Delivering to</li>
            <li>{}</li>
          </ul>

          <ul className="navbar-nav">
            <input type="text" placeholder="Search for anything.." className="form-control" />
            <button className="btn-src">Search</button>
          </ul>
          <ul>
            <li className="nav-item">
              <Link to="/">
                <img src={"images/mandeeLogo.jpg"} alt="store" className="navbar-brand" style={{ width: "96px" }} />
              </Link>
            </li>
          </ul>
          <div className=" quick-links" id="divLoginSignup" style={{ display: "block" }}>
            <h5 className="Rm-Credit">Remaining Credit: ₹{}</h5>

          </div>

          <Link to="/SavedLists" className="ml-auto" >
            <i className="fas fa-list" style={{ fontSize: "20px", color: "gray" }} />
          </Link>

          <Link to="/cart" className="ml-auto" >
            <i class="fas fa-shopping-cart" style={{ fontSize: "20px", color: "gray" }} />
          </Link>
          <a href="/ManageDetails" className="ml-auto">
            Hello {}<br />
            Manage Account
          </a>
        </nav>
        < DropdownBar />

      </React.Fragment >
    );
  }
}

const Nav = styled.nav`
                // background: var(--mainWhite);
  .nav-link {
                color: var(--mainWhite) !important;
            font-size:1.3rem;
            text-transform:capitalize;
          }
  @media (max-width: 460px) {
    .navbar - nav {
                flex - direction: row !important;
          }
          
        }
      `;


