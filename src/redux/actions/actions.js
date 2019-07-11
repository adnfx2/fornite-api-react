import axios from "axios";
import * as api from "../../utils/api/api";
import { LOCAL_REDUX_STORE } from "../../utils/localStorage/localStorage";

export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const SUCCESS_ITEMS = "SUCCESS_ITEMS";
export const FAILURE_ITEMS = "FAILURE_ITEMS";

//ITEMS
const fetchingItems = () => ({ type: REQUEST_ITEMS });
const successItems = items => ({ type: SUCCESS_ITEMS, payload: items });
const failureItems = error => ({ type: FAILURE_ITEMS, payload: error });

export const fetchItems = () => dispatch => {
  const composedApi = api.API_ROOT + api.ITEMS;
  dispatch(fetchingItems());

  return axios
    .get(composedApi, {
      headers: {
        Authorization: api.AUTH_TOKEN
      }
    })
    .then(response => {
      localStorage.setItem(
        LOCAL_REDUX_STORE,
        JSON.stringify(response.data.data)
      );
      dispatch(successItems(response.data.data));
    })
    .catch(error => dispatch(failureItems(error)));
};