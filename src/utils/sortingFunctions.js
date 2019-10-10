import queryString from "query-string";

export const commonFilter = ({ data, keys }, searchBy, searchValue) =>
  keys.filter(key => {
    // console.log({ data, key, searchBy }, { total: data[key][searchBy] });
    return "data[key][searchBy].toLocaleLowerCase().indexOf(searchValue) !== -1";
  });

export const applyCommonFilterByOrder = (sourceData, queries) => {};

export const applyFilters = (sourceData, queryParams, filterExecutionOrder) => {
  const { data, keys } = sourceData;
  let filteredKeys = keys;
  // On a new search, filter data
  if (queryParams) {
    const queries = queryString.parse(queryParams);
    console.log(filterExecutionOrder);
    filterExecutionOrder.forEach(({ filterKey, filterFunc }) => {
      if (queries[filterKey]) {
        filteredKeys = filterFunc(
          { data, keys: filteredKeys },
          filterKey,
          queries[filterKey]
        );
      }
    });
  }
  console.log(filteredKeys.length);
  return filteredKeys;
};
