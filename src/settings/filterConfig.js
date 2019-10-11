import { firstLetterCaps } from "../utils/textUtils";
import * as sortFuncs from "../utils/sortingFunctions";

const modifySearch = value => {
  if (value === "All") {
    return "";
  } else {
    return "_" + value.toLocaleLowerCase();
  }
};

// Filters specified in the array are going to be executed by index order.
export const filterExecutionOrder = [
  {
    id: 0,
    paramKey: "type",
    field: "type",
    customization: modifySearch,
    filterFunc: sortFuncs.memoCommonFilter
  },
  {
    id: 1,
    paramKey: "rarity",
    field: "rarity",
    customization: modifySearch,
    filterFunc: sortFuncs.memoCommonFilter
  },
  {
    id: 2,
    paramKey: "search",
    field: "name",
    filterFunc: sortFuncs.memoCommonFilter
  },
  {
    id: 3,
    paramKey: "nameOrder",
    field: "name",
    filterFunc: sortFuncs.memoAlphaSort
  }
];

export const alphabeticOrderOptions = ["Default", "A-Z", "Z-A"];

export const getOptions = options => {
  const _options = options
    ? [
        "All",
        ...Object.keys(options).map(option =>
          firstLetterCaps(options[option].name)
        )
      ]
    : [];
  return _options;
};
