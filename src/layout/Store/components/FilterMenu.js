import React from "react";
import { createUseStyles } from "react-jss";
import Search from "../../../components/Search/Search";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../../components/SearchSelect/SearchSelect";

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
    composes: ["p-4 text-dark"]
  },
  title: {
    composes: ["py-3"]
  },
  subTitle: {
    composes: ["pt-4 pb-2"]
  }
});
const FilterMenu = ({ ...props }) => {
  const classes = useFilterMenuStyle();

  return (
    <div className={classes.filterMenu}>
      <h3 className={classes.title}>Filter by</h3>
      <Search />
      <h4 className={classes.subTitle}>Name</h4>
      <RadioGroup className="pl-2" config={nameRadioGroup} />
      <h4 className={classes.subTitle}>Rarity</h4>
      <SearchSelect className="pl-2" config={selectTypes} />
    </div>
  );
};

export default FilterMenu;
