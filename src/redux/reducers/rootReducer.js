import { combineReducers } from "redux";

const dataFetched = (state = {}, action) => {
  if (action.response) {
    return { ...state, ...action.response };
  }
  return state;
};

const rootReducer = combineReducers({
  dataFetched
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
