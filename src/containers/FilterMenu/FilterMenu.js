import React from "react";
import { createUseStyles } from "react-jss";
import Search from "../../components/Search/Search";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import ToggeableStar from "../../components/ToggleableStar/ToggeableStar";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../styles/variables";
import { alphaSortOptions, getOptions } from "../../settings/filterConfig";
import useQueryParams from "../../hooks/useQueryParams";

const useFilterMenuStyle = createUseStyles({
  filterMenu: {
    composes: ["p-4 text-dark"],
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      marginTop: "78px",
      boxShadow: "0 0 4px rgba(0,0,0,0.3)"
    }
  },
  title: {
    composes: ["pt-0 pb-3"]
  },
  subTitle: {
    composes: ["pt-4 pb-2"]
  },
  reset: {
    composes: ["pt-4"],
    display: "inline-block",
    textDecoration: "underline",
    color: "#00f",
    cursor: "pointer",
    [`&:hover, &:active`]: {
      color: "#40c"
    }
  }
});

const FilterMenu = ({ rarities, types }) => {
  const raritiesArray = getOptions(rarities);
  const typesArray = getOptions(types);
  const classes = useFilterMenuStyle();
  const [urlParams, pushQueryParams] = useQueryParams();

  return (
    <div className={classes.filterMenu}>
      <h4 className={classes.title}>Sort By</h4>
      <Search
        compId="search"
        actionHandler={pushQueryParams}
        externalState={urlParams.search}
      />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup
        className="pl-2"
        options={alphaSortOptions}
        compId="nameOrder"
        actionHandler={pushQueryParams}
        externalState={urlParams.nameOrder}
      />
      <h5 className={classes.subTitle}>Type</h5>
      <SearchSelect
        className="pl-2"
        options={typesArray}
        compId="type"
        actionHandler={pushQueryParams}
        externalState={urlParams.type}
      />
      <h5 className={classes.subTitle}>Rarity</h5>
      <SearchSelect
        className="pl-2"
        options={raritiesArray}
        compId={"rarity"}
        actionHandler={pushQueryParams}
        externalState={urlParams.rarity}
      />
      <ToggeableStar
        className="pt-4"
        compId="starreds"
        label="Starreds only"
        actionHandler={pushQueryParams}
        externalState={urlParams.starreds}
      />
      <span onClick={() => pushQueryParams("reset")} className={classes.reset}>
        Reset
      </span>
    </div>
  );
};

export default FilterMenu;
