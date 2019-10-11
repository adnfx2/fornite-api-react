import * as sortFuncs from "../utils/sortingFunctions";

const modifySearch = value => {
  if (value === "All") {
    return "";
  } else {
    return "_" + value.toLocaleLowerCase();
  }
};

export default [
  {
    id: 0,
    paramKey: "type",
    field: "type",
    customization: modifySearch,
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 1,
    paramKey: "rarity",
    field: "rarity",
    customization: modifySearch,
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 2,
    paramKey: "search",
    field: "name",
    filterFunc: sortFuncs.commonFilter
  },
  {
    id: 3,
    paramKey: "nameOrder",
    field: "name",
    filterFunc: sortFuncs.alphaSort
  }
];
