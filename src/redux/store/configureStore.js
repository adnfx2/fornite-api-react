import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, createLogger())
  );

export default configureStore;
