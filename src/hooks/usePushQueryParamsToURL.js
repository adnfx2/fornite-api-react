import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

//  This hook returns a composable function (HOF), it accepts a queryHelper() and returns a new function that can be used as a action handler for form components like radioButtons, inputTexts, etc... to push the current value of it component as a query params. It can add/update queries in the url without deleting the previous ones.

const usePushQueryParamsToURL = () => {
  const history = useHistory();
  const location = useLocation();
  const currentQueries = queryString.parse(location.search);

  const pushQueryParamsToUrl = queryHelper => (...args) => {
    // flag to reset queryParams
    if (queryHelper === "reset") {
      return history.push(location.pathname);
    }
    // queryHelper() it's a function that returns a {key:value} pair, correspondent to the selection in the form component Eg.: { search: some-value-from-helper }
    const newQuery = queryHelper(...args);
    if (newQuery) {
      const newQueryKey = Object.keys(newQuery);
      //Add or remove queryParam
      const finalQueries = newQuery[newQueryKey]
        ? { ...currentQueries, ...newQuery }
        : delete currentQueries[newQueryKey] && currentQueries;
      // Push queryParam to url
      return history.push(
        `${location.pathname}?${queryString.stringify(finalQueries)}`
      );
    }
  };

  return [currentQueries, pushQueryParamsToUrl];
};

export default usePushQueryParamsToURL;

//Might need to refactor this hook to a simpler and more readable version.
