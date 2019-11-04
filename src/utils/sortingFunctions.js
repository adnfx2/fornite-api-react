import { memoize } from "lodash";
import queryString from "query-string";

/* ****** Sorting functions ****** */
export const commonFilter = ({ data, keys }, nestedProps, searchValue) => {
  const { source, field } = nestedProps;
  const selectedData = data[source];
  return keys.filter(
    key =>
      selectedData[key][field].toLocaleLowerCase().indexOf(searchValue) !== -1
  );
};
// No memoization needed just yet for this function
export const starredsFilter = ({ data, keys }, nestedProps) => {
  const { source } = nestedProps;
  const selectedData = data[source];
  const allStarredsItems = Object.keys(selectedData);
  return allStarredsItems;
};

export const alphaSort = ({ data, keys }, nestedProps, searchValue) => {
  const { source, field } = nestedProps;
  const selectedData = data[source];
  if (searchValue === "a-z") {
    return keys
      .slice()
      .sort((prevID, nextID) =>
        selectedData[prevID][field].localeCompare(selectedData[nextID][field])
      );
  } else if (searchValue === "z-a") {
    return keys
      .slice()
      .sort((prevID, nextID) =>
        selectedData[nextID][field].localeCompare(selectedData[prevID][field])
      );
  }
  return keys;
};

/* ****** Memoized sorting functions ****** */
// Memoized resolver
const memoCommonResolver = ({ data, keys }, nestedProps, searchValue) =>
  `${keys.length}_${nestedProps.field}_${searchValue}`;

// Memoized version of commonFilter (without cache tracking)
export const memoCommonFilter = memoize(commonFilter, memoCommonResolver);

// Memoized version of alphaSort (without cache tracking)
export const memoAlphaSort = memoize(alphaSort, memoCommonResolver); //memoized version

/* ****** Helper functions ****** */
// Apply several filters to data previously normalized in the form '{ data, keys }', only the filters specified as queryParams in the url are going to be applied by a given order.
export const applyFilters = (sourceData, queryParams, filtersOrder) => {
  const { result: keys, ...data } = sourceData;
  // Check if we got data and a search is active
  if (!keys.length || !queryParams) return keys;

  const queries = queryString.parse(queryParams);
  let filteredKeys = keys;
  // Perform each filter by a given order
  filtersOrder.forEach(filter => {
    const { paramKey, nestedProps, filterFunc, modifySearch } = filter;
    // Apply only the filters in the url as queryParams
    if (queries[paramKey]) {
      // Customize data if requiered
      const query = modifySearch
        ? modifySearch(queries[paramKey])
        : queries[paramKey].toLocaleLowerCase();
      filteredKeys = filterFunc(
        { data, keys: filteredKeys },
        nestedProps,
        query
      );
    }
  });
  return filteredKeys;
};
