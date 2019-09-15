import React, { useState } from "react";
import Placeholder from "./Placeholder.js";
import StyledCardGroup from "./StyledCardGroup";
import StyledCard from "./StyledCard.js";
import usePagination from "../../../hooks/usePagination";

export const ItemsList = ({ data = { itemsById: {}, result: [] } }) => {
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
              `Obtain type: ${obtainedType}`,
              `Type: ${type.slice(1)}`,
              `Average stars: ${ratings.avgStars}`,
              `Total points: ${ratings.totalPoints}`,
              `Total votes: ${ratings.numberVotes}`
            ]
          };
          return <StyledCard key={id} data={normalizedData} />;
        })}
      </StyledCardGroup>
    );
  } else {
    return <Placeholder />;
  }
};

export default ItemsList;
