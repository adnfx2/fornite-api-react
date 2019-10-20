import React from "react";
import { Button, CardGroup } from "react-bootstrap";
import NoSearchFound from "../../../components/NoSeachFound/NoSearchFound";
import NetworkError from "../../../components/NetworkError/NetworkError";
import ListPlaceholder from "./ListPlaceholder.js";
import renderGameItems from "./renderGameItems";
import usePagination from "../../../hooks/usePagination";
import { applyFilters } from "../../../utils/sortingFunctions";
import { filterExecutionOrder } from "../../../settings/filterConfig";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "error-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh"
  }
});

const ListItems = ({
  sourceData,
  location,
  starredsHandler,
  error,
  reloadHandler,
  ...props
}) => {
  const isDataAvailable = sourceData.result;
  const filteredKeys =
    isDataAvailable &&
    applyFilters(sourceData, location.search, filterExecutionOrder);
  const [slicedKeys, nextPage, loadMoreHandler] = usePagination(filteredKeys);
  const styles = useStyles();
  // Is data ready to be displayed?
  if (slicedKeys.length) {
    return (
      <React.Fragment>
        <p className="p-2">Total: {filteredKeys.length}</p>
        <CardGroup>
          {renderGameItems(sourceData, slicedKeys, {
            starredsHandler
          })}
        </CardGroup>
        {nextPage ? (
          <span className="d-flex justify-content-center">
            <Button
              className="m-3"
              size="lg"
              variant="secondary"
              onClick={loadMoreHandler}
            >
              LoadMore
            </Button>
          </span>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
  // Any errors popped up while fetching data ?
  if (error) {
    return (
      <NetworkError
        className={styles["error-container"]}
        errorMsg="Our api provider is having issues, please click here to reload or refresh the page."
        reloadHandler={reloadHandler}
      />
    );
  }
  //  Are we filtering data ?
  if (isDataAvailable && location.search) {
    return <NoSearchFound />;
  }
  //  We must be fecthing data, display a placeholder
  return <ListPlaceholder />;
};

export default ListItems;
