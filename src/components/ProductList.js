import React, { Component } from "react";
import Product from "./Product";
// import Title from "./Title";
import { Flours } from "../data";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import '../components/ProductList.css';
import Footer from "./Footer/Footer";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";



export default class ProductList extends Component {
  state = {
    flours: Flours,
  };

  render() {
    return (
      <React.Fragment>
        <div className="hero-banner__img">
          <div className="placeOrder">
            <div id="quickLink">
              <Link to="/PlaceOrder">
                <img src="images/order-icon.jpg" alt="chat" />
                <p className="font-weight-bolder">Place an Order</p>
              </Link>
              <Link to="/CancelOrder">
                <img src="images/CancelOrder.png" className="mb-2" alt="chat" />
                <p className="font-weight-bolder">Return/Cancel Order</p>
              </Link>
            </div>
          </div>
          <img className="img-fluid mandee-img" src="images/banner-img.jpg" alt="" style={{ marginLeft: "15px", marginRight: "15px" }} />
          <div className="Btn">
            {/* <ButtonContainer className="btn-1">Signup</ButtonContainer> */}
            <ButtonContainer className="btn-1"><a href={"https://play.google.com/store/apps/details?id=com.mandeeonline.b2b"}>Download the App</a></ButtonContainer>
          </div>
        </div>

        <ProductWrapper className="py-5">
          <div className="container-fluid">
            <h3><span>Flours</span>
              <div id="showMore_101291" className="showmore" onClick="toggleSKU('101291')">Show More</div>
              <hr />
              <div className="row" style={{ fontSize: "13px" }}>
                <ProductConsumer>
                  {value => {
                    return value.flours.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </h3>
          </div>
          <br />

          <div className="container-fluid">
            <h3><span>Pulses</span>
              <div id="showMore_101291" className="showmore" onclick="toggleSKU('101291')">Show More</div>
              <hr />
              <div className="row" style={{ fontSize: "13px" }}>
                <ProductConsumer>
                  {value => {
                    return value.flours.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </h3>
          </div>
          <br />
          <div className="container-fluid">
            <h3><span>Sugar, Salt & Jaggery</span>
              <div id="showMore_101291" className="showmore" onclick="toggleSKU('101291')">Show More</div>
              <hr />
              <div className="row" style={{ fontSize: "13px" }}>
                <ProductConsumer>
                  {value => {
                    return value.flours.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </h3>
          </div>
          <br />
          <div className="container-fluid">
            <h3><span>Cereals</span>
              <div id="showMore_101291" className="showmore" onclick="toggleSKU('101291')">Show More</div>
              <hr />
              <div className="row" style={{ fontSize: "13px" }}>
                <ProductConsumer>
                  {value => {
                    return value.flours.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </h3>
          </div>
          <br />
          <div className="container-fluid">
            <h3><span>Spices & Dry Fruits</span>
              <div id="showMore_101291" className="showmore" onclick="toggleSKU('101291')">Show More</div>
              <hr />
              <div className="row" style={{ fontSize: "13px" }}>
                <ProductConsumer>
                  {value => {
                    return value.flours.map(product => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </h3>
          </div>
        </ProductWrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const ProductWrapper = styled.section``;
