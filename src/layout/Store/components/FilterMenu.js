import React, { useRef } from "react";
import { createUseStyles } from "react-jss";
import Search from "../../../components/Search/Search";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../../styles/variables";
import { nameRadioGroup, getRarities } from "./FilterMenuConfig";
import usePushQueryParams from "../../../hooks/usePushQueryParams";

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
  const createFilterHandler = usePushQueryParams();
  const radioGroupHandler = createFilterHandler(label => ({
    [nameRadioGroup.groupName]: label
  }));

  const searchRef = useRef();
  const searchHandler = createFilterHandler(event => {
    console.log("change");
    const { key } = event;
    if (key === "Enter") {
      return { search: searchRef.current.value };
    }
  });

  const rarityRef = useRef();
  const typeRef = useRef();
  const searchSelectHandler = createFilterHandler((ref) => {
    const {
      dataset: { selectId },
      value
    } = ref.current;

    return {
      [selectId]: value
    };
  });

  const resetHandler = createFilterHandler("reset");

  return (
    <div className={classes.filterMenu}>
      <h4 className={classes.title}>Sort By</h4>
      <Search 
        forwardRef={searchRef}
        onKeyPress={searchHandler} 
      />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup
        onChange={radioGroupHandler}
        className="pl-2"
        config={nameRadioGroup}
      />
      <h5 className={classes.subTitle}>Rarity</h5>
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
      </div>
    </div>
  );
};

export default FilterMenu;
