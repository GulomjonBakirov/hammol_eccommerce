import React from "react";
import { Link } from "react-router-dom";

import "./product.scss";

function Product({ product, col }) {
  return (
    <div className={`col-sm-12 col-md-6 col-lg-${col} my-3`}>
      <div className="card p-3 rounded">
        <div className="discount">-{product?.discountPercentage}%</div>
        <img
          className="card-img-top mx-auto w-100"
          src={product.thumbnail}
          alt="cardImgTOp"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.rating / 5) * 100}%` }}
              ></div>
            </div>
          </div>
          <p className="card-text">${product.price}</p>
          <Link
            to={`/product/${product.id}`}
            id="view_btn"
            className="btn btn-block"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
