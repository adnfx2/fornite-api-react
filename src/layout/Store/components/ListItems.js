import React from "react";
import ListPlaceholder from "./ListPlaceholder.js";
import StyledCardGroup from "./StyledCardGroup";
import StyledCard from "./StyledCard.js";
import usePagination from "../../../hooks/usePagination";

const SortByAlpha = (array, data) => {
  return array.sort((a, b) => data[a].name.localeCompare(data[b].name));
};

const ListItems = ({ data = { itemsById: {}, result: [] } }) => {
  const [itemsSlice, nextPage, loadMoreHandler] = usePagination(data.result);
  if (itemsSlice.length) {
    const { itemsById } = data;

    return (
      <StyledCardGroup
        numberOfItems={data.result.length}
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
          } = itemsById[id];
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
  } else {
    return <ListPlaceholder />;
  }
};

export default ListItems;
