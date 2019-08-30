import axios from "axios";
import {
  API_ROOT,
  // ENDPOINT_ITEMS,
  // ENDPOINT_NEWS_STW,
  // ENDPOINT_WEAPONS,
  AUTH_TOKEN
} from "../../../utils/api/api";
import normalizeByChunks from "./normalizeByChunks";

// This function returns an array nested in an object, the array should be located at "dataLocation" of "obj".
const simplifyNestedResponse = (obj, dataLocation) => {
  if (!Array.isArray(dataLocation)) {
    throw new Error("nestedProps must be an array");
  }
  return dataLocation.reduce((acc, prop) => {
    if (!acc[prop]) {
      throw new Error(`Property "${prop}" not found in fetched data`);
    }
    return acc[prop];
  }, obj);
};

// This function wraps an object inside it's category and adds a timestamp.
const reorganizeObj = (data, tag) => {
  if (!data.entities) {
    return { [tag]: { data, timestamp: Date.now() } };
  }
  const { entities, result } = data;
  return {
    [tag]: {
      ...entities,
      result,
      timestamp: Date.now()
    }
  };
};

// AJAX
const callApi = (
  endpoint,
  config = { schema: null, locationInResponse: null }
) => {
  const { schema, locationInResponse } = config;
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? `${API_ROOT}/${endpoint}` : endpoint;

  return axios
    .get(fullUrl, {
      headers: {
        Authorization: AUTH_TOKEN
      }
    })
    .then(response => {
      const plainData = locationInResponse
        ? simplifyNestedResponse(response, locationInResponse)
        : response;
      return normalizeByChunks({
        data: plainData,
        toleranceFactor: 10,
        schema
      });
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

  const { endpoint, config, types } = callAPI;

  if (typeof endpoint === "function") {
    throw new Error(
      "endpoint as a function Not supported, specify a string endpoint URL."
    );
  }

  if (typeof endpoint !== "string") {
    throw new Error("Specify a string endpoint URL.");
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error("Expected an array of three action types.");
  }
  if (!types.every(type => typeof type === "string")) {
    throw new Error("Expected action types to be strings.");
  }

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API];
    return finalAction;
  };

  const endpointIdentifier = endpoint.split("/")[0];

  const [requestType, successType, failureType] = types;
  next(
    actionWith({
      type: requestType,
      apiErrors: {
        [endpointIdentifier]: null
      }
    })
  );
  return callApi(endpoint, config).then(
    result => {
      const response = reorganizeObj(result, endpointIdentifier);
      return next(
        actionWith({
          response,
          type: successType
        })
      );
    },
    error =>
      next(
        actionWith({
          type: failureType,
          apiErrors: {
            [endpointIdentifier]:
              error.message || error || "Something bad happened"
          }
        })
      )
  );
};

export default callFortniteAPI;
