import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import usePagination from "../../../hooks/usePagination";

const ListWeapons = ({ data = { weaponsById: {}, result: [] } }) => {
  const [weaponsSlice, nextPage, loadMoreHandler] = usePagination(data.result);
  if (weaponsSlice.length) {
    return (
      <div>
        {weaponsSlice.map(x => (
          <p key={x}>{x}</p>
        ))}
        {//prettier-ignore
        nextPage
            ? <button onClick={loadMoreHandler}>LoadMore</button>
            : "that's it"}
      </div>
    );
  } else {
    return <div>"Loading"</div>;
  }
};

export default ListWeapons;
