import React from "react";
import NoSearchFound from "../../../components/NoSeachFound/NoSearchFound";
import ListPlaceholder from "./ListPlaceholder.js";
import StyledCardGroup from "./StyledCardGroup";
import StyledCard from "./StyledCard.js";
import usePagination from "../../../hooks/usePagination";
import { applyFilters } from "../../../utils/sortingFunctions";
import { filterExecutionOrder } from "../../../settings/filterConfig";

const ListItems = ({
  data = { itemsById: null, result: [] },
  location,
  ...props
}) => {
  const filteredData = applyFilters(
    { data: data.itemsById, keys: data.result },
    location.search,
    filterExecutionOrder
  );
  const [itemsSlice, nextPage, loadMoreHandler] = usePagination(filteredData);

  // Is data ready to be displayed?
  if (itemsSlice.length) {
    // const { itemsById } = data;
    return (
      <StyledCardGroup
        // numberOfItems={data.result.length}
        numberOfItems={filteredData.length}
        loadMoreHandler={loadMoreHandler}
        nextPage={nextPage}
      >
        {itemsSlice.map(id => {
          const {
            name,
            images,
            rarity,
            cost,
            type,
            obtainedType,
            ratings
          } = data.itemsById[id];
          const normalizedData = {
            id,
            name,
            image: images.icon,
            rarity,
            type,
            attributes: [
              `Cost: ${cost || "--"}`,
              `Get: ${obtainedType}`,
              `Type: ${type.slice(1)}`,
              `Stars: ${ratings.avgStars}`,
              `Points: ${ratings.totalPoints}`,
              `Votes: ${ratings.numberVotes}`
            ]
          };
          return <StyledCard key={id} data={normalizedData} />;
        })}
      </StyledCardGroup>
    );
  }
  //  Are we filtering data ?
  if (data.itemsById && location.search) {
    return <NoSearchFound />;
  }
  //  We must be fecthing data, display a placeholder
  return <ListPlaceholder />;
};

export default ListItems;
