import memoize from "lodash.memoize";
import queryString from "query-string";

export const commonFilter = ({ data, keys }, searchBy, searchValue) =>
  keys.filter(
    key => data[key][searchBy].toLocaleLowerCase().indexOf(searchValue) !== -1
  );
const memoCommonResolver = ({ data, keys }, searchBy, searchValue) =>
  `${keys.length}_${searchBy}_${searchValue}`;

// Memoized version of commonFilter (without cache tracking)
export const memoCommonFilter = memoize(commonFilter, memoCommonResolver);
export const alphaSort = ({ data, keys }, searchBy, searchValue) => {
  if (searchValue === "a-z") {
    return keys
      .slice()
      .sort((keyA, keyZ) =>
        data[keyA][searchBy].localeCompare(data[keyZ][searchBy])
      );
  } else if (searchValue === "z-a") {
    return keys
      .slice()
      .sort((keyA, keyZ) =>
        data[keyZ][searchBy].localeCompare(data[keyA][searchBy])
      );
  }
  return keys;
};
// Memoized version of alphaSort (without cache tracking)
export const memoAlphaSort = memoize(alphaSort, memoCommonResolver); //memoized version

// Apply several filters to data previously normalized in the form '{ data, keys }', only the filters specified as queryParams in the url are going to be applied by a given order.
export const applyFilters = (sourceData, queryParams, filtersOrder) => {
  const { data, keys } = sourceData;
  let filteredKeys = keys;
  if (queryParams) {
    const queries = queryString.parse(queryParams);
    // Perform each filter by a given order
    filtersOrder.forEach(filter => {
      const { paramKey, field, filterFunc, customization } = filter;
      // Apply only the filters in the url as queryParams
      if (queries[paramKey]) {
        // Customize data if requiered
        const query = customization
          ? customization(queries[paramKey])
          : queries[paramKey].toLocaleLowerCase();
        filteredKeys = filterFunc({ data, keys: filteredKeys }, field, query);
      }
    });
  }
  return filteredKeys;
};
