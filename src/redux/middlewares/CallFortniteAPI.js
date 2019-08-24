import axios from "axios";
import { normalize, schema } from "normalizr";
import { camelizeKeys } from "humps";
import {
  API_ROOT,
  ENDPOINT_ITEMS,
  ENDPOINT_NEWS_STW,
  ENDPOINT_WEAPONS,
  AUTH_TOKEN
} from "../../utils/api/api";

export const testApi = () => {
  // callAPI(ENDPOINT_ITEMS, {
  //   schema: schemas.itemsById,
  //   nestedProps: schemas.commonNestedProps
  // });
  // callAPI(ENDPOINT_NEWS_STW, { nestedProps: schemas.commonNestedProps });
  callAPI(ENDPOINT_WEAPONS, {
    schema: schemas.weaponsSchema,
    nestedProps: schemas.weaponsNestedProps
  });
  // const cachedWeapons = JSON.parse(localStorage.getItem(ENDPOINT_WEAPONS));
  //
  // console.log(cachedWeapons);
  //
  // normalize(cachedWeapons, schemas.weaponsById);
};

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

const callAPI = (endpoint, { schema, nestedProps }) => {
  const fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? `${API_ROOT}/${endpoint}` : endpoint;

  return axios
    .get(fullUrl, {
      headers: {
        Authorization: AUTH_TOKEN
      }
    })
    .then(response => {
      const simplifiedResponse =
        nestedProps && simplifyNestedResponse(response, nestedProps);
      const camelizedJson = camelizeKeys(simplifiedResponse || response);
      const result = schema ? normalize(camelizedJson, schema) : camelizedJson;

      // caching response
      localStorage.setItem(endpoint, JSON.stringify(result));
      console.log(result);
    });
};

const item = new schema.Entity("itemsById", {}, { idAttribute: "itemId" });
const itemsSchema = [item];

const weaponRarity = new schema.Entity(
  "raritiesById",
  {},
  {
    mergeStrategy: (entityA, entityB) => {
      const { weaponId: weaponA, ...restA } = entityA;
      const { weaponId: weaponB, ...restB } = entityB;
      return {
        ...restA,
        ...restB,
        weaponId: [...entityA.weaponId, ...entityB.weaponId]
      };
    }
  }
);
const weapon = new schema.Entity(
  "weaponsById",
  { rarity: weaponRarity },
  {
    idAttribute: "identifier",
    processStrategy: ({ identifier, rarity, ...rest }) => ({
      ...rest,
      rarity: { id: `id_${rarity}`, name: rarity, weaponId: [identifier] },
      id: identifier
    })
  }
);
const weaponsSchema = new schema.Array(weapon);

export const schemas = {
  commonNestedProps: ["data", "data"],
  item,
  itemsSchema,
  weapon,
  weaponsSchema,
  weaponsNestedProps: ["data", "data", "entries"]
};

// // A Redux middleware that interprets actions with CALL_API info specified.
// // Performs the call and promises when such actions are dispatched.
// const middlewareCallAPI = store => next => action => {
//   const callAPI = action[CALL_API];
//   if (typeof callAPI === "undefined") {
//     return next(action);
//   }
//
//   const { endpoint, schema, types } = callAPI;
//
//   if (typeof endpoint === "function") {
//     throw new Error(
//       "endpoint as a function Not supported, specify a string endpoint URL."
//     );
//   }
//
//   if (typeof endpoint !== "string") {
//     throw new Error("Specify a string endpoint URL.");
//   }
//
//   if (!schema) {
//     throw new Error("Specify one of the exported Schemas.");
//   }
//
//   if (!Array.isArray(types) || types.length !== 3) {
//     throw new Error("Expected an array of three action types.");
//   }
//   if (!types.every(type => typeof type === "string")) {
//     throw new Error("Expected action types to be strings.");
//   }
//
//   const actionWith = data => {
//     const finalAction = { ...action, data };
//     delete finalAction[CALL_API];
//     return finalAction;
//   };
//
//   const [requestType, successType, failureType] = types;
//   next(actionWith({ type: requestType }));
//
//   return callApi(endpoint, schema).then(
//     response =>
//       next(
//         actionWith({
//           response,
//           type: successType
//         })
//       ),
//     error =>
//       next(
//         actionWith({
//           type: failureType,
//           error: error.message || "Something bad happened"
//         })
//       )
//   );
// };
//
// export default middlewareCallAPI;
