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
      <p className="p-2">Total: {numberOfItems}</p>
      <CardGroup>{children}</CardGroup>
      {nextPage ? (
        <span className="d-flex justify-content-center">
          <Button className="m-3" size="lg" variant="secondary" onClick={loadMoreHandler}>
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
