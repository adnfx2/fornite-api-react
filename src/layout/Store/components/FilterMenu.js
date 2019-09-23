import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//  Search

const useSearchStyle = createUseStyles({
  search: {
    position: "relative"
  },
  input: {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid var(--light)",
    height: "2.5rem",
    fontSize: ".875rem",
    padding: "0 .25rem 0 2.5rem",
    [`&:focus`]: {
      outline: "none",
      borderColor: "var(--primary)",
      boxShadow: "0 0 0 1px var(--primary)"
    }
  },
  icon: {
    position: "absolute",
    display: "inline-block",
    textAlign: "center",
    top: "1px",
    lineHeight: "2.5rem",
    left: "1rem",
    color: "var(--gray)"
  }
});
const Search = props => {
  const { search, input, icon } = useSearchStyle();
  return (
    <div className={search}>
      <span className={icon}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input className={input} type="text" placeholder="Search..." />
    </div>
  );
};

//  FilterMenu

const useFilterMenuStyle = createUseStyles({
  filterMenu: {
    composes: ["p-4 text-dark"]
  }
});
const FilterMenu = ({ ...props }) => {
  const { filterMenu } = useFilterMenuStyle();

  return (
    <div className={filterMenu}>
      <h4>Filter by</h4>
      <Search />
    </div>
  );
};

export default FilterMenu;
