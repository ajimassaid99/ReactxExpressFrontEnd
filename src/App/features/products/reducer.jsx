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
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAILURE,
    EDIT_PRODUCT_REQUEST,
    EDIT_PRODUCT_SUCCESS,
    EDIT_PRODUCT_FAILURE
  } from "./constans";
  
  const initialState = {
    loading: false,
    products: [],
    error: "",
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_PRODUCTS_SUCCESS:
        return {
          loading: false,
          products: action.payload,
          error: "",
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          loading: false,
          products: [],
          error: action.payload,
        };
        case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
        error: "",
      };
    case ADD_PRODUCT_FAILURE:
      return {
        ...state,
        product: null,
        loading: false,
        error: action.payload,
      };
      case DELETE_PRODUCT_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_PRODUCT_SUCCESS:
        return {
          ...state,
          product: action.payload,
          loading: false,
          error: "",
        };
      case DELETE_PRODUCT_FAILURE:
        return {
          ...state,
          product: null,
          loading: false,
          error: action.payload,
        };
        case GET_PRODUCT_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: "",
      };
    case GET_PRODUCT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        product: {},
        error: action.payload,
      };
      case EDIT_PRODUCT_REQUEST:
        return { ...state, loading: true };
      case EDIT_PRODUCT_SUCCESS:
        return { ...state, loading: false, editsuccess: action.payload };
      case EDIT_PRODUCT_FAILURE:
        return { ...state, loading: false, editerror: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;