import { combineReducers } from "redux";
import { ADD_TO_STARREDS, REMOVE_FROM_STARREDS } from "../actions/actions";

const dataFetched = (state = {}, action) => {
  if (action.response) {
    return { ...state, ...action.response };
  }
  return state;
};

const errors = (state = { apiErrors: {} }, action) => {
  if (action.apiErrors) {
    return { ...state, apiErrors: { ...state.apiErrors, ...action.apiErrors } };
  }
  return state;
};

const starredCards = (state = {}, action) => {
  if (action.type === ADD_TO_STARREDS) {
    return { ...state, [action.id]: { timestamp: action.timestamp } };
  }
  if (action.type === REMOVE_FROM_STARREDS) {
    const _state = { ...state };
    delete _state[action.id];
    return _state;
  }
  return state;
};

const rootReducer = combineReducers({
  dataFetched,
  errors,
  starredCards
});

export default rootReducer;

// -----> eyes on <-----
// import * as ActionTypes from "../actions/actions";
// import { LOCAL_REDUX_STORE } from "../../utils/localStorage/localStorage";
// const parseJson = key => {
//   if (typeof key !== "string") {
//     return new Error("key must be a String");
//   }
//   if (!localStorage.getItem(key)) {
//     return null;
//   }
//   console.log("Found redux cached data");
//   return JSON.parse(localStorage.getItem(key));
// };
