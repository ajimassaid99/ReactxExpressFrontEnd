import axios from "axios";
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAILURE,
  GET_PRODUCT_BY_ID_REQUEST,
  GET_PRODUCT_BY_ID_SUCCESS,
  GET_PRODUCT_BY_ID_FAILURE,
} from "./constans";

export const fetchProducts = (search) => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());
      setTimeout(() => {
        axios
          .get(`http://localhost:3000/api/v4/product?search=${search}`)
          .then((response) => {
            const products = response.data;
            dispatch(fetchProductsSuccess(products));
          })
          .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchProductsFailure(errorMsg));
          });
      }, 1000);
    };
  };

export const fetchProductsRequest = () => {
  return {
    type: FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

export const addProduct = (product) => {
    return (dispatch) => {
      dispatch(addProductRequest());
      axios
        .post("http://localhost:3000/api/v4/product", product)
        .then((response) => {
          const addedProduct = response.data;
          dispatch(addProductSuccess(addedProduct));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(addProductFailure(errorMsg));
        });
    };
  };

export const addProductRequest = () => {
    return {
      type: ADD_PRODUCT_REQUEST,
    };
  };
  
  export const addProductSuccess = (product) => {
    return {
      type: ADD_PRODUCT_SUCCESS,
      payload: product,
    };
  };
  
  export const addProductFailure = (error) => {
    return {
      type: ADD_PRODUCT_FAILURE,
      payload: error,
    };
  };


  export const deleteProduct = (productId) => {
    return (dispatch) => {
      dispatch(deleteProductRequest());
      axios
        .delete(`http://localhost:3000/api/v4/product/${productId}`)
        .then((response) => {
          const deletedProduct = response.data;
          dispatch(deleteProductSuccess(deletedProduct));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(deleteProductFailure(errorMsg));
        });
    };
  };
  
  export const deleteProductRequest = () => {
    return {
      type: DELETE_PRODUCT_REQUEST,
    };
  };
  
  export const deleteProductSuccess = (product) => {
    return {
      type: DELETE_PRODUCT_SUCCESS,
      payload: product,
    };
  };
  
  export const deleteProductFailure = (error) => {
    return {
      type: DELETE_PRODUCT_FAILURE,
      payload: error,
    };
  };

  export const getProductByIdRequest = () => {
    return {
      type: GET_PRODUCT_BY_ID_REQUEST,
    };
  };
  
  export const getProductByIdSuccess = (product) => {
    return {
      type: GET_PRODUCT_BY_ID_SUCCESS,
      payload: product,
    };
  };
  
  export const getProductByIdFailure = (error) => {
    return {
      type: GET_PRODUCT_BY_ID_FAILURE,
      payload: error,
    };
  };
  
  export const getProductById = (id) => {
    return (dispatch) => {
      dispatch(getProductByIdRequest());
      axios
        .get(`http://localhost:3000/api/v4/product/${id}`)
        .then((response) => {
            const product = response.data;
          dispatch(getProductByIdSuccess(product));
        })
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(getProductByIdFailure(errorMsg));
        });
    };
  };

  export const editProduct = (id, data) => {
    return (dispatch) => {
        dispatch(editProductRequest());
        axios
          .put(`http://localhost:3000/api/v4/product/${id}`,data)
          .then((response) => {
              const product = response.data;
            dispatch(editProductSuccess(product));
          })
          .catch((error) => {
            const errorMsg = error.message;
            dispatch(editProductFailure(errorMsg));
          });
      };
  };

  export const editProductRequest = () => {
    return {
      type: EDIT_PRODUCT_REQUEST
    };
  };
  
  export const editProductSuccess = (product) => {
    return {
      type: EDIT_PRODUCT_SUCCESS,
      payload: product
    };
  };
  
  export const editProductFailure = (error) => {
    return {
      type: EDIT_PRODUCT_FAILURE,
      payload: error
    };
  };