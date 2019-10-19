import React from "react";
import StyledCard from "./StyledCard";

export default ({ weaponsById, starredCards }, keys, props) => {
  keys.map(id => {
    const { name, image, rarity, stats } = weaponsById[id];
    const cardFields = {
      id,
      name,
      image,
      rarity,
      attributes: [
        `DPS: ${stats.dps}`,
        `Ammo: ${stats.magazinesize}`,
        `Headshot: ${stats.hitHead}`,
        `Bodyshot: ${stats.hitBody}`,
        `Reload t.: ${stats.reloadtime}`,
        `Firerate: ${stats.firerate}`
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
};
