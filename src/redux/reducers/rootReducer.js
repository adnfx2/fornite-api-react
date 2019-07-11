import * as ActionTypes from "../actions/actions";
import { LOCAL_REDUX_STORE } from "../../utils/localStorage/localStorage"
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

const rootReducer = (state = initialState, action) => {
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

export default rootReducer;
