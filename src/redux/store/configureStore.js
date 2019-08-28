import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import callFortniteAPI from "../middlewares/CallFortniteAPI/CallFortniteAPI";
import { createLogger } from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, callFortniteAPI, createLogger())
  );

export default configureStore;
