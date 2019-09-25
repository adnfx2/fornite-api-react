import React from "react";
import { createUseStyles } from "react-jss";
import Search from "../../../components/Search/Search";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../../styles/variables";

const nameRadioGroup = {
  groupTitle: "Name",
  groupName: "byName",
  options: [{ label: "Default" }, { label: "A-Z" }, { label: "Z-A" }]
};

const selectTypes = {
  title: "Rarity",
  options: ["all", "rare", "weird", "lol"]
};

const useFilterMenuStyle = createUseStyles({
  filterMenu: {
    composes: ["p-4 text-dark"],
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      marginTop: "52px",
      boxShadow: "0 0 4px rgba(0,0,0,0.3)"
    }
  },
  title: {
    composes: ["pt-0 pb-3"]
  },
  subTitle: {
    composes: ["pt-4 pb-2"]
  }
});
const FilterMenu = ({ ...props }) => {
  const classes = useFilterMenuStyle();

  return (
    <div className={classes.filterMenu}>
      <h4 className={classes.title}>Sort By</h4>
      <Search />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup className="pl-2" config={nameRadioGroup} />
      <h5 className={classes.subTitle}>Rarity</h5>
      <SearchSelect className="pl-2" config={selectTypes} />
    </div>
  );
};

export default FilterMenu;
