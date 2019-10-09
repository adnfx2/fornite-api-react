import { useEffect } from "react";
import queryString from "query-string";

const useFilter = (data, queryParams) => {
  useEffect(() => {
    const queries = queryString.parse(queryParams);
    const search = queries.search ? queries.search.toLowerCase() : "";
    console.log({ search });

    const searchFilter = data.filter(a => {
      const result = a.name.toLocaleLowerCase().indexOf(search) !== -1;
      return result;
    });

    console.log({ filterResult: searchFilter });
    // console.log(data.sort((a, b) => b.name.localeCompare(a.name)));
  }, [queryParams]); //eslint-disable-line
};

export default useFilter;
