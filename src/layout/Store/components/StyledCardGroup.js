import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";

const StyledCardGroup = ({ numberOfItems, children, nextPage, loadMoreHandler }) => {
  return (
    <CardGroup>
      <p>Total: {numberOfItems}</p>
      {children}
      {//prettier-ignore
      nextPage
          ? <button onClick={loadMoreHandler}>LoadMore</button>
          : "that's it"}
    </CardGroup>
  );
};

export default StyledCardGroup;
