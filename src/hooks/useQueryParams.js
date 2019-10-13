/*
  # useQueryParams.js
  This hook provides a state with the current queryParams in the URL, and it also returns a helper function to easily push queryParams.
*/

import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

const useQueryParams = () => {
  const history = useHistory();
  const location = useLocation();
  const currentQueries = queryString.parse(location.search);

  const pushQueryParams = queryRequested => {
    console.log(queryRequested);
    // flag to reset queryParams
    if (queryRequested === "reset") {
      return history.push(location.pathname);
    }
    if (queryRequested) {
      const [id, value] = Object.keys(queryRequested);
      const queryId = queryRequested[id];
      const queryValue = queryRequested[value];
      //Add or remove queryParam
      const finalQueries = queryValue
        ? { ...currentQueries, [queryId]: queryValue }
        : delete currentQueries[queryId] && currentQueries;
      // Push queryParam to url
      console.log({ finalQueries });
      return history.push(
        `${location.pathname}?${queryString.stringify(finalQueries)}`
      );
    }
  };

  return [currentQueries, pushQueryParams];
};

export default useQueryParams;

//Might need to refactor this hook to a simpler and more readable version.
