import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";

//  This hook returns a composable function (HOF), it accepts a queryHelper() and returns a new function that can be used as a action handler for form components like radioButtons, inputTexts, etc... to push the current value of it component as a query params. It can add/update queries in the url without deleting the previous ones.

const usePushQueryParams = () => {
  const history = useHistory();
  const location = useLocation();

  const pushQueryParamsToUrl = queryHelper => (...args) => {
    const prevQueries = queryString.parse(location.search);

    // queryHelper() it's a function that returns a key:value pair, correspondent to the selection in the form component.
    const query = queryHelper(...args);
    const mergedQueries = {
      ...prevQueries,
      ...query
    };
    history.push(
      `${location.pathname}?${queryString.stringify(mergedQueries)}`
    );
  };

  return pushQueryParamsToUrl;
};

export default usePushQueryParams;
