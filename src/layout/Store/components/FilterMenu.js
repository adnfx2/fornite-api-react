import React from "react";
import { createUseStyles } from "react-jss";
import { useHistory } from "react-router-dom";
import Search from "../../../components/Search/Search";
import RadioGroup from "../../../components/RadioGroup/RadioGroup";
import SearchSelect from "../../../components/SearchSelect/SearchSelect";
import { breakpoints } from "../../../styles/variables";
import { nameRadioGroup, getRarities } from "./FilterMenuConfig";

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
  }
});
const FilterMenu = ({ rarities }) => {
  const classes = useFilterMenuStyle();
  const _rarities = getRarities(rarities);
  const history = useHistory();

  return (
    <div className={classes.filterMenu}>
      <button
        onClick={() => {
          const {
            location: { pathname }
          } = history;
          console.log(pathname);
          history.push(`${pathname}?crabs=hello&h=jk`);
        }}
      >
        test
      </button>
      <h4 className={classes.title}>Sort By</h4>
      <Search />
      <h5 className={classes.subTitle}>Name</h5>
      <RadioGroup className="pl-2" config={nameRadioGroup} />
      <h5 className={classes.subTitle}>Rarity</h5>
      <SearchSelect className="pl-2" config={_rarities} />
    </div>
  );
};

export default FilterMenu;
