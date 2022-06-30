import axios from "axios";
import { url } from "../apiConstants";
import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCT_CATEGORIES_FAIL,
  ALL_PRODUCT_CATEGORIES_SUCCESS,
  ALL_PRODUCT_CATEGORIES_REQUEST,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../productConstants";

export const getProducts =
  (name = "", category, limit = 6, offset = 0) =>
  async (dispatch) => {
    try {
      dispatch({
        type: ALL_PRODUCTS_REQUEST,
      });
      let link = `${url}/product?name=${name}&limit=${limit}&offset=${offset}`;

      if (category) {
        link = `${url}/product?name=${name}&category=${category}&limit=${limit}&offset=${offset}`;
      }
      const { data } = await axios.get(link);

      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.message,
      });
    }
  };

export const getCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: ALL_PRODUCT_CATEGORIES_REQUEST,
    });
    const { data } = await axios.get(`${url}/category`);
    dispatch({
      type: ALL_PRODUCT_CATEGORIES_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ALL_PRODUCT_CATEGORIES_FAIL,
      payload: err.message,
    });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`${url}/product/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: err.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
