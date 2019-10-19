import React from "react";
import StyledCard from "./StyledCard";

export default ({ itemsById, starredCards }, keys, props) =>
  keys.map(id => {
    const {
      name,
      images,
      rarity,
      cost,
      type,
      obtainedType,
      ratings
    } = itemsById[id];
    const cardFields = {
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
    return (
      <StyledCard
        {...props}
        key={id}
        data={cardFields}
        starredCards={starredCards}
      />
    );
  });
