import axios from "axios";
import * as api from "../../utils/api/api";
import { LOCAL_REDUX_STORE } from "../../utils/localStorage/localStorage";

export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const SUCCESS_ITEMS = "SUCCESS_ITEMS";
export const FAILURE_ITEMS = "FAILURE_ITEMS";

//***********************ITEMS
const fetchingItems = () => ({ type: REQUEST_ITEMS });
const successItems = items => ({ type: SUCCESS_ITEMS, payload: items });
const failureItems = error => ({ type: FAILURE_ITEMS, payload: error });

export const fetchItems = () => dispatch => {
  const composedApi = api.API_ROOT + api.NEWS_STW;
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
      console.log(response);
    })
    .catch(error => dispatch(failureItems(error)));
};

export const REQUEST_NEWS = "REQUEST_NEWS";
export const SUCCESS_NEWS = "SUCCESS_NEWS";
export const FAILURE_NEWS = "FAILURE_NEWS";

//***********************NEWS
const fetchingNews = () => ({ type: REQUEST_NEWS });
const successNews = news => ({ type: SUCCESS_NEWS, payload: news });
const failureNews = error => ({ type: FAILURE_NEWS, payload: error });

export const fetchNews = () => dispatch => {
  const composedApi = api.API_ROOT + api.NEWS_STW;
  dispatch(fetchingNews());

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
      dispatch(successNews(response.data.data));
      console.log(response);
    })
    .catch(error => dispatch(failureNews(error)));
};
