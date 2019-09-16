import React from "react";
import { Button, CardGroup } from "react-bootstrap";

const StyledCardGroup = ({
  numberOfItems,
  children,
  nextPage,
  loadMoreHandler
}) => {
  return (
    <React.Fragment>
      <p className="">Total: {numberOfItems}</p>
      <CardGroup className="justify-content-around">{children}</CardGroup>
      {nextPage ? (
        <span className="d-flex justify-content-center">
          <Button size="lg" variant="secondary" onClick={loadMoreHandler}>
            LoadMore
          </Button>
        </span>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default StyledCardGroup;
