import React from "react";

export default function CartItem({ item, value }) {

  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2">
      <div className="col-12 mx-auto text-center col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", heigth: "5rem" }}
          className="img-fluid"
          alt="product"
        />
        <span style={{ fontSize: "13px" }}>{title} </span>
      </div>

      <div className="col-10 mx-auto text-center col-lg-1 ">
        {/* <span className="d-lg-none">product :</span> {title} */}
        <p>₹{total}</p>
      </div>
      {/* <div className="col-10 mx-auto col-lg-1 ">
        <strong>
          <span className="d-lg-none">price :</span> ₹ {price}
        </strong>
      </div> */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex">
          <div>
            <span
              className="btn btn-black"
              onClick={() => decrement(id)}
            >- </span>
            <span className="btn btn-black">{count}</span>
            <span
              className="btn btn-black"
              onClick={() => increment(id)}
            >+</span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto text-center col-lg-1 ">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-4 ">
      </div>
    </div>
  );
}