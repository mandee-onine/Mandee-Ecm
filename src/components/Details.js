import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer";

export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart
            } = value.detailProduct;

            return (
              <div className="container-fluid py-5">
                {/* title */}
                {/* <div className="row">
                <div className="col-10 mx-auto text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div> */}
                {/* end of title */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-4 my-2">
                    <img src={img} className="img-fluid" alt="product" style={{ height: "100%" }} />
                  </div>
                  {/* prdoduct info */}

                  <div className="col-10 mx-auto col-md-8 my-3 text-capitalize">
                    <h3>{title}</h3>
                    <p>Variant : 555</p>
                    <p>
                      Grade : 555</p>
                    <p>Selling Type:</p>
                    <p>Food Preference: Veg</p>
                    <h4 className="text-blue">
                      <strong>
                        price : <span>₹ </span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize mt-3 mb-0">
                      About :
                  </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/">
                        <ButtonContainer>back to products</ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
              </div>

            );
          }}
        </ProductConsumer>
        <Footer />
      </React.Fragment>
    );
  }
}
