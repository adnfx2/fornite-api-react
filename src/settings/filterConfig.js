import * as sortFuncs from "../utils/sortingFunctions";
export default [
  {
    id: 0,
    filterKey: "type",
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 1,
    filterKey: "rarity",
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 2,
    filterKey: "search",
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 3,
    filterKey: "name",
    filterFunc: sortFuncs.commonFilter
  }
];
