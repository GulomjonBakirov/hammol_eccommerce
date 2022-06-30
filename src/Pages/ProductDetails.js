import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { clearErrors, getSingleProduct } from "../Store/actions/productaction";
import Loader from "../components/layout/Loader";
import MetaData from "../components/layout/MetaData";
import BreadCrumb from "../components/layout/BreadCrumb";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const { loading, error, product } = useSelector(
    (state) => state.singleProduct
  );

  console.log(product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));

    if (error) {
      message.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={product?.title} />
          <BreadCrumb current={product?.title} />

          <div className="row f-flex justify-content-around">
            <div className="col-12 col-lg-5 img-fluid" id="product_image">
              <Carousel pause="hover">
                {product?.images &&
                  product?.images.map((image, id) => (
                    <Carousel.Item key={id}>
                      <img
                        className="d-block w-100"
                        src={image}
                        alt={product?.title}
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </div>

            <div className="col-12 col-lg-5 mt-5">
              <h3>{product?.name}</h3>
              <p id="product_id">Product: {product?.title}</p>

              <hr />

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(product.rating / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

              <hr />

              <p id="product_price">${product.price}</p>

              <hr />

              <p id="product_price" className="redColor">
                -{product?.discountPercentage}%
              </p>

              <hr />

              <p>
                Status:{" "}
                <span
                  id="stock_status"
                  className={product.stock > 0 ? "greenColor" : "redColor"}
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}(
                  {product?.stock})
                </span>
              </p>

              <hr />

              <h4 className="mt-2">Description:</h4>
              <p>{product.description}</p>
              <hr />
              <p id="product_seller mb-3">
                Sold by: <strong>{product.brand}</strong>
              </p>
              <p id="product_seller mb-3">
                Category: <strong>{product?.category}</strong>
              </p>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
