import React from "react";
import Placeholder from "./Placeholder.js";
import StyledCardGroup from "./StyledCardGroup";
import StyledCard from "./StyledCard.js";
import usePagination from "../../../hooks/usePagination";

const WeaponsList = ({ data = { weaponsById: {}, result: [] } }) => {
  const [weaponsSlice, nextPage, loadMoreHandler] = usePagination(data.result);
  if (weaponsSlice.length) {
    const { weaponsById } = data;
    return (
      <StyledCardGroup
        numberOfItems={data.result.length}
        loadMoreHandler={loadMoreHandler}
        nextPage={nextPage}
      >
        {weaponsSlice.map(id => {
          const { name, image, rarity, stats } = weaponsById[id];
          const normalizedData = {
            id,
            name,
            image,
            rarity,
            attributes: [
              `DPS: ${stats.dps}`,
              `Ammo: ${stats.magazinesize}`,
              `Headshot: ${stats.hitHead}`,
              `Bodyshot: ${stats.hitBody}`,
              `Reload time: ${stats.reloadtime}`,
              `Firerate: ${stats.firerate}`
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

export default WeaponsList;
