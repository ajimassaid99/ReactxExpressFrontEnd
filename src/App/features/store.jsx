import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import productReducer from "./products/reducer";

const store = createStore(
  productReducer,
  applyMiddleware(thunkMiddleware)
);

export default store;