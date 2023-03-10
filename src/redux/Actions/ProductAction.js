import axios from "axios";
import { ActionTypes } from "../Types/Types";

export const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: ActionTypes.IS_LOADING });
      const response = await axios.get("https://fakestoreapi.com/products/");
      dispatch({
        type: ActionTypes.GET_PRODUCTS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addToCart = (product) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: product,
  };
};
export const removeFromCart = (productID) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: productID,
  };
};
export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};
export const logIn = () => {
  return {
    type: ActionTypes.IS_LOGGED,
  };
};
export const clearCategory = (category) => {
  return {
    type: ActionTypes.CLEAR_CATEGORY,
  };
};
export const filterProducts = (category) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    payload: category,
  };
};
export const updateCartItems = (
  itemId = null,
  itemQuantity = null,
  itemPrice = null,
  updateType = 1
) => {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: { itemId, itemQuantity, itemPrice, updateType },
  };
};
