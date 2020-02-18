import React, { Component } from 'react'
import { Flours } from '../../data';
import { ProductConsumer } from '../../context';
import Footer from '../Footer/Footer';
import './Besan.css'
import styled from "styled-components";
import { Link } from "react-router-dom";


const filters = [
    { title: "Name", type: "string" },
    {

        title: "Color",
        type: "choice",
        choices: ["blue", "orange"],
    },
    {

        title: "Height",
        type: "choice",
        choices: ["tiny", "small", "big", "huge"],
    },
    {

        title: "Width",
        type: "choice",
        choices: ["tiny", "small", "big", "huge"],
    },
];

const filterComponents = {
    string: ({ filter, onChange, value }) => (
        <input
            value={value || ""}
            onInput={e => onChange(filter.id, e.target.value)}
        />
    ),
    choice: ({ filter, onChange, value }) => (
        <select
            value={value || ""}
            onInput={e => onChange(filter.id, e.target.value)}
            size={1 + filter.choices.length}
        >
            <option value="">(none)</option>
            {filter.choices.map(c => (
                <option value={c} key={c}>
                    {c}
                </option>
            ))}
        </select>
    ),
};

export default class Besan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: {},
            Flours: Flours
        };
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }
    onChangeFilter(filterId, value) {
        const newFilterState = Object.assign({}, this.state.filters, {
            [filterId]: value || undefined,
        });
        this.setState({ filters: newFilterState });
    }
    renderFilter(f) {
        const Component = filterComponents[f.type];
        return (
            <div key={f.id}>
                {/* <b>{f.title}</b> */}
                <Component
                    filter={f}
                    value={this.state.filters[f.id]}
                    onChange={this.onChangeFilter}
                />
            </div>
        );
    }
    render() {
        const { id, title, img, price, inCart, MRP } = this.props.besan;
        return (
            <React.Fragment>
                <div class="">

                    <div class="col-md-3">
                        <table>
                            <tbody>
                                <tr>
                                    <td>{filters.map(f => this.renderFilter(f))}</td>
                                    <td>{JSON.stringify(this.state.filters)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-9" >
                        <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                            <div className="card" style={{
                                border: "1px gray solid",
                                // padding: "10px"
                            }}>
                                <ProductConsumer>
                                    {value => {
                                        return (
                                            <div
                                                className="img-container p-5"
                                                onClick={() => value.handleDetail(id)}
                                            >
                                                <Link to="/details">
                                                    <img src={img} alt="" className="card-img-top" />
                                                </Link>
                                                <button
                                                    className="cart-btn"
                                                    disabled={inCart ? true : false}
                                                    onClick={() => {
                                                        value.addToCart(id);
                                                        value.openModal(id);
                                                    }}
                                                >
                                                    {inCart ? (
                                                        <p className="text-capitalize mb-0" disabled>
                                                            in cart
                                                        </p>
                                                    ) : (
                                                            <i className="fas fa-cart-plus" />
                                                        )}
                                                </button>
                                            </div>
                                        );
                                    }}
                                </ProductConsumer>
                                <div className="card-footer d-flex justify-content-left">
                                    <p className="align-self mb-0">{title}</p>

                                </div>
                                {/* <h6 className="text-blue mb-0"> */}
                                {/* <span className="mr-1">₹</span> */}
                                <p>₹{price}  Selling Price</p>
                                <p><strike style={{ color: "red" }}>₹{MRP}  MRP</strike></p>
                                <p><i className="fas fa-truck" />  Delivery On : </p>
                            </div>
                        </ProductWrapper>
                    </div>

                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

const ProductWrapper = styled.div` `
//   .card {
//     border-color: transparent;
//     transition: all 1s linear;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 1s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.04rem solid rgba(0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba(247, 247, 247);
//     }
//   }
//   .img-container {
//     position: relative;
//     overflow: hidden;
//   }
//   .card-img-top {
//     transition: all 1s linear;
//   }
//   .img-container:hover .card-img-top {
//     transform: scale(1.2);
//   }
//   .cart-btn {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     padding: 0.2rem 0.2rem;
//     background: var(--green);
//     border: none;
//     color: var(--mainWhite);
//     font-size: 1.4rem;
//     border-radius: 0.5rem 0 0 0;
//     transform: translate(100%, 100%);
//     transition: all 1s ease-in-out;
//   }
//   .img-container:hover .cart-btn {
//     transform: translate(0, 0);
//   }
//   .cart-btn:hover {
//     color: var(--mainBlue);
//     cursor: pointer;
//   }
// `;