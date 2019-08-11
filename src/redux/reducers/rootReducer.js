import { combineReducers } from "redux";
import * as ActionTypes from "../actions/actions";
import { LOCAL_REDUX_STORE } from "../../utils/localStorage/localStorage";

const parseJson = key => {
  if (typeof key !== "string") {
    return new Error("key must be a String");
  }
  if (!localStorage.getItem(key)) {
    return null;
  }
  console.log("Found redux cached data");
  return JSON.parse(localStorage.getItem(key));
};

const initialState = {
  isFetching: false,
  error: "",
  invalidate: false,
  data: parseJson(LOCAL_REDUX_STORE) || []
};

const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_ITEMS:
      return {
        ...state,
        isFetching: true
      };

    case ActionTypes.SUCCESS_ITEMS:
      return {
        isFetching: false,
        error: "",
        data: action.payload
      };

    case ActionTypes.FAILURE_ITEMS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.REQUEST_NEWS:
      return {
        ...state,
        isFetching: true
      };

    case ActionTypes.SUCCESS_NEWS:
      return {
        isFetching: false,
        error: "",
        data: action.payload
      };

    case ActionTypes.FAILURE_NEWS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  itemsReducer,
  news
});

export default rootReducer;
