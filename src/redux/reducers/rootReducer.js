import * as ActionTypes from "../actions/actions";

const initialState = {
  isFetching: false,
  error: "",
  data: []
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
