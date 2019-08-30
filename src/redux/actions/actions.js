import { CALL_API } from "../middlewares/CallFortniteAPI/CallFortniteAPI";
import { schemas } from "../middlewares/CallFortniteAPI/schemas";
import {
  ENDPOINT_NEWS_STW,
  ENDPOINT_ITEMS,
  ENDPOINT_WEAPONS
} from "../../utils/api/api";

// News
export const REQUEST_NEWS = "REQUEST_NEWS";
export const SUCCESS_NEWS = "SUCCESS_NEWS";
export const FAILURE_NEWS = "FAILURE_NEWS";
export const fetchNews = () => ({
  [CALL_API]: {
    types: [REQUEST_NEWS, SUCCESS_NEWS, FAILURE_NEWS],
    endpoint: ENDPOINT_NEWS_STW,
    config: { locationInResponse: schemas.commonLocation }
  }
});

// Items
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const SUCCESS_ITEMS = "SUCCESS_ITEMS";
export const FAILURE_ITEMS = "FAILURE_ITEMS";
export const fetchItems = () => ({
  [CALL_API]: {
    types: [REQUEST_ITEMS, SUCCESS_ITEMS, FAILURE_ITEMS],
    endpoint: ENDPOINT_ITEMS,
    config: {
      schema: schemas.itemsSchema,
      locationInResponse: schemas.commonLocation
    }
  }
});

// Weapons
export const REQUEST_WEAPONS = "REQUEST_WEAPONS";
export const SUCCESS_WEAPONS = "SUCCESS_WEAPONS";
export const FAILURE_WEAPONS = "FAILURE_WEAPONS";
export const fetchWeapons = () => ({
  [CALL_API]: {
    types: [REQUEST_WEAPONS, SUCCESS_WEAPONS, FAILURE_WEAPONS],
    endpoint: ENDPOINT_WEAPONS,
    config: {
      schema: schemas.weaponsSchema,
      locationInResponse: schemas.weaponsLocation
    }
  }
});
