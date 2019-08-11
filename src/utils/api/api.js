// constants
export const API_ROOT = "https://fortnite-api.theapinetwork.com";
export const AUTH_TOKEN = "8231bb87427bdaa20e08de2767f9992e";
// endpoints
export const WEAPONS = "/weapons/get"; // headers: {{Authorization}}
export const ITEMS = "/items/list"; // headers: {{Authorization}}
export const NEWS_STW = "/stw_motd/get";
export const NEWS_BR = "/br_motd/get";

// dynamic endpoints
export const selectItemById = itemid => `/item/get?id=${itemid}`; // headers: {{Authorization}} param: id {{itemid}}
