import React, { Component } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { ProductConsumer } from "../context";
import axios from 'axios';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from 'prop-types';
import { Flours } from "../data";
import $ from 'jquery';
import { AddItem } from "./AddItem";
export default class Product extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    // This binding is necessary to make `this` work in the callback
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    const age = this.state.price;
    const info = { name: name, age: age };
    const data = [info];
    this.setState({
      data: data
    });
  };


  // componentDidMount() {
  //   this.toggleMenu();
  // }

  CreateSavedList = () => {
    if (true) {
      return <Redirect to="/details/" />
    }
    $('#Listclosed').click();
    $('#listName').val('');
    $('#savedlist').click();
    $('#savedlistclose').click();
    $('#myModal').find('.form-savedList').removeClass('was-validated');
    $('#popover-content').find('.form-inline').removeClass('was-validated');
    // eslint-disable-next-line no-undef
    CallWService("../Helpers/Helper.aspx/AddItemstoWishList", JSON.stringify({ WishListName: 'WishListName' }), function (res) {
      alert("Success");
    });
  }

  toggleMenu() {
    var wishListname = $("#listItems").val() === undefined ? '' : $('#listItems').find('li.liactive').html();
    axios.post(`../Helpers/Helper.aspx/AddItemstoWishList`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    // eslint-disable-next-line no-unused-expressions
    JSON.stringify({ WishListName: wishListname, createnew: false }), function (res) {
      if (res != null && res === "Success") {
        $('#savedlistclose').click();
        $(".popup").fadeOut(300);
        // showSuccessMessage("created saved list");
      }
      else if (res != null && res === "alreadyexists") {
        // showMessage("Already Exits Please Try Another");
      }
      else {
        // showMessage("Failed to create saved list");
      }

    }
    return false;
  }

  addItem = event => {
    event.preventDefault();
    const { name, price } = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength
      ?
      (itemsInState[itemsArrayLength - 1].id + 1)
      :
      1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          name,
          price
        })
      ],
      name: "",
      price: ""
    })
  };

  render() {
    const { id, title, img, price, inCart, MRP } = this.props.product;
    const { name, price1 } = this.state;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="" style={{ border: "2px lightGray solid", margin: "opx" }}>
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container p-1"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button
                    className="cart-btn" disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                      // console.log("added to cart");
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        AddedTocart
                      </p>
                    ) : (
                        <i className="fas fa-cart-plus" />
                      )}
                  </button>
                </div>
              );
            }}

          </ProductConsumer>
          <div className="card-footer" style={{ fontSize: "17px" }}>
            <p className="align-self mb-0">{title}</p>

          </div>
          <p>₹{price}  Selling Price</p>
          <p><strike style={{ color: "red" }}>₹{MRP}  MRP</strike></p>
          <p><i className="fas fa-truck" />  Delivery On :
            <div class="modal fade" style={{ opacity: '0 !important ' }} id="exampleModalCenter" tabindex="0" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="savedlisttitle">Saved Lists</h5>
                    <a href="#" style={{ textDecorationColor: 'ActiveBorder' }} >
                      <span aria-hidden="true" onclick="CreateSavedList()"
                        id="savedlist"
                        data-toggle="modal" data-target="#myModal">+Create New</span>
                    </a>
                  </div>
                  <div class="modal-body" id="SavedlistItems" style={{ maxHeight: "calc(100vh - 220px)", overflowY: "auto" }}>
                    <p style={{ fontSize: "18px" }}>Select One From The Existing Lists</p>
                    <ul id="listItems"></ul>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" id="savedlistclose">Close</button>
                    <button type="button" class="btn btn-primary" id="CreateWishList" onclick={this.handleSubmit}
                      data-dismiss="modal">Save</button>
                  </div>
                </div>
              </div>
            </div>

            <i className="fas fa-list" style={{ fontSize: "20px", float: "right" }} id="Wishist"
              data-toggle="modal" data-target="#exampleModalCenter"
            />

          </p>
        </div>


        <button type="button" id="savedlist" class="btn btn-primary"
          data-toggle="modal" data-target="#myModal" style={{ display: "none" }}>
          Launch demo modal
    </button>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Create New Saved list</h4>
                <button type="button" id="close" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body" style={{ alignItems: "center" }}>
                <form className="form-savedList" onSubmit={this.handleSubmit}
                  style={{ width: '100%', textAlign: "inherit !important" }} role="form">

                  <div class="col-lg-12">

                    <AddItem
                      name={name}
                      price1={price1}
                      ref={(input) => this.input = input}
                      onChange={this.handleInputChange}
                    />

                    <div class="invalid-feedback">
                      Please provide a valid Saved List name.
                            </div>
                  </div>

                  <div style={{ padding: "15px" }}>
                    <button type="button" onClick={this.handleSubmit} style={{ color: "White", marginLeft: "42%" }}
                      class="btn btn-primary btn-sm">
                      Save
                        </button>
                  </div>
                </form>
                <ul>
                  {this.state.data.map(person => <li>{person.name} {person.age}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ProductWrapper >
    );
  }
}

Flours.propTypes = {
  flours: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0px solid rgba(0, 0, 0, 0);
      box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(0.8);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    // padding: 0.1rem 0.1rem;
    background: var(--green);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
