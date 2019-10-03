import React, { useState } from "react";
import ListPlaceholder from "./ListPlaceholder.js";
import StyledCardGroup from "./StyledCardGroup";
import StyledCard from "./StyledCard.js";
import usePagination from "../../../hooks/usePagination";
import queryString from "query-string";

const SortByAlpha = (array, data) => {
  return array.sort((a, b) => data[a].name.localeCompare(data[b].name));
};

const useFilter = (data, queryParams) => {
  const queries = queryString.parse(queryParams);
  console.log({ queries });
};

const ListItems = ({ data = { itemsById: {}, result: [] }, ...props }) => {
  const filteredData = useFilter(data, props.location.search);
  const [itemsSlice, nextPage, loadMoreHandler] = usePagination(data.result);
  console.log({ itemsSlice, data: data.itemsById });

  if (itemsSlice.length) {
    const { itemsById } = data;

    return (
      <StyledCardGroup
        numberOfItems={data.result.length}
        loadMoreHandler={loadMoreHandler}
        nextPage={nextPage}
      >
        <div
          style={{
            background: "var(--primary)",
            position: "absolute",
            padding: "1em",
            color: "#fff",
            zIndex: "5000"
          }}
        >
          {props.location.search || "nothing"}
        </div>
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
