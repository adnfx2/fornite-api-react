import React from "react";
import { createUseStyles } from "react-jss";
import Search from "../../components/Search/Search";
import RadioGroup from "../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../styles/variables";
import { alphabeticOrderOptions, getOptions } from "./FilterMenuConfig";
import usePushQueryParamsToURL from "../../hooks/usePushQueryParamsToURL";

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
  const [urlParams, createPushQueryParams] = usePushQueryParamsToURL();
  const resetHandler = createPushQueryParams("reset");
  const filterHandler = createPushQueryParams(e => {
    const {
      dataset: { filterId },
      value
    } = e.target;
    return { [filterId]: value };
  });

  return (
    <div className={classes.filterMenu}>
      <h4 className={classes.title}>Sort By</h4>
      <Search
        filterId="search"
        actionHandler={filterHandler}
        externalValue={urlParams.search}
      />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup
        className="pl-2"
        options={alphabeticOrderOptions}
        filterId="nameOrder"
        onChange={filterHandler}
        value={urlParams.nameOrder}
      />
      <h5 className={classes.subTitle}>Rarity</h5>
      <SearchSelect
        className="pl-2"
        options={raritiesArray}
        filterId={"rarity"}
        onChange={filterHandler}
        value={urlParams.rarity}
      />
      <h5 className={classes.subTitle}>Type</h5>
      <SearchSelect
        className="pl-2"
        options={typesArray}
        filterId="type"
        onChange={filterHandler}
        value={urlParams.type}
      />
      <span onClick={resetHandler} className={classes.reset}>
        Reset
      </span>
    </div>
  );
};

export default FilterMenu;
