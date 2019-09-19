import { useState } from "react";

const max = 12; //  Maximun amount of data to be displayed

const usePagination = data => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / max);
  const nextPage = page < totalPages;
  const upperLimit = page * max;
  const dataSliced = data.slice(0, upperLimit);
  const loadMoreHandler = () => {
    setPage(prevPage =>
      //  prettier-ignore
      prevPage < totalPages
        ? prevPage + 1
        : prevPage
    );
  };

  return [dataSliced, nextPage, loadMoreHandler];
};

export default usePagination;
