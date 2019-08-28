import axios from "axios";
import {
  API_ROOT,
  ENDPOINT_ITEMS,
  ENDPOINT_NEWS_STW,
  ENDPOINT_WEAPONS,
  AUTH_TOKEN
} from "../../../utils/api/api";
import { schemas } from "./schemas";
import normalizeByChunks from "./normalizeByChunks";
import { camelize } from "humps";

const simplifyNestedResponse = (response, nestedProps) => {
  if (!Array.isArray(nestedProps)) {
    throw new Error("nestedProps must be an array");
  }
  return nestedProps.reduce((acc, prop) => {
    if (!acc[prop]) {
      throw new Error(`Property "${prop}" not found in fetched data`);
    }
    return acc[prop];
  }, response);
};

const reorganizeObj = (data, tag) => {
  const _tag = tag.split("/")[0];
  if (!data.entities) {
    return { [_tag]: { data, timestamp: Date.now() } };
  }
  const { entities, result } = data;
  return {
    [_tag]: {
      ...entities,
      result,
      timestamp: Date.now()
    }
  };
};

const callApi = (endpoint, { schema, nestedProps }) => {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? `${API_ROOT}/${endpoint}` : endpoint;

  return axios
    .get(fullUrl, {
      headers: {
        Authorization: AUTH_TOKEN
      }
    })
    .then(response => {
      const test = response.data.data;
      console.log(
        "rawData ->",
        test.filter(x => x.itemId === "0add7aa-f3225d4-8e12143-753c789")
      );
      const plainData = nestedProps
        ? simplifyNestedResponse(response, nestedProps)
        : response;

      return normalizeByChunks({
        data: plainData,
        toleranceFactor: 10,
        schema: schema
      }).then(result => reorganizeObj(result, endpoint));
    });
};

export const CALL_API = "CALL_API";

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
const callFortniteAPI = store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === "undefined") {
    return next(action);
  }

  const { endpoint, schema, types } = callAPI;

  if (typeof endpoint === "function") {
    throw new Error(
      "endpoint as a function Not supported, specify a string endpoint URL."
    );
  }

  if (typeof endpoint !== "string") {
    throw new Error("Specify a string endpoint URL.");
  }

  // if (!schema) {
  //   throw new Error("Specify one of the exported Schemas.");
  // }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expected action types to be strings.");
  }

  const actionWith = data => {
    const finalAction = { ...action, data };
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;
  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema).then(
    response =>
      next(
        actionWith({
          response,
          type: successType
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || "Something bad happened"
        })
      )
  );
};

export default callFortniteAPI;
