import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  categoriesReducer,
  productsReducer,
  singleProductReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  singleProduct: singleProductReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
