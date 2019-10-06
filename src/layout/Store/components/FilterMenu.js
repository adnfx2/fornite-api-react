import React from "react";
import { createUseStyles } from "react-jss";
import Search from "../../../components/Search/Search";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../../styles/variables";
import { nameRadioGroup, getRarities } from "./FilterMenuConfig";
import usePushQueryParamsToURL from "../../../hooks/usePushQueryParamsToURL";

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
    textDecoration: "underline",
    color: "#00f"
  }
});

const FilterMenu = ({ rarities }) => {
  const _rarities = getRarities(rarities);
  const classes = useFilterMenuStyle();
  const [urlParams, createFilterHandler] = usePushQueryParamsToURL();

  const searchHandler = createFilterHandler(event => {
    const value = event.target.value;
    return { search: value };
  });

  const radioGroupHandler = createFilterHandler((e, value) => {
    return { nameOrder: value };
  });

  return (
    <div className={classes.filterMenu}>
      <h4 className={classes.title}>Sort By</h4>
      <Search onChange={searchHandler} value={urlParams.search} />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup
        onChange={radioGroupHandler}
        className="pl-2"
        config={nameRadioGroup}
        value={urlParams.nameOrder}
      />
      {/*<h5 className={classes.subTitle}>Rarity</h5>
      <SearchSelect
        data-select-id="rarity"
        onClick={searchSelectHandler}
        forwardRef={rarityRef}
        className="pl-2"
        config={_rarities}
      />
      <h5 className={classes.subTitle}>Type</h5>
      <SearchSelect
        data-select-id="type"
        onClick={searchSelectHandler}
        forwardRef={typeRef}
        className="pl-2"
        config={_rarities}
      />
      <div onClick={resetHandler} className={classes.reset}>
      Reset
      </div>*/}
    </div>
  );
};

export default FilterMenu;
