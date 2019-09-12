import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  filterBtn: {
    composes: ["d-md-none mx-2 px-4 py-1 border rounded"],
    cursor: "pointer",
    transition: "transform 200ms ease-in-out",
    [`&:hover`]: {
      transform: "translateY(-1px)"
    }
  }
});

const FilterButton = ({ onClick, className: outerStyles }) => {
  const innerStyles = useStyle();
  const classes = `${innerStyles.filterBtn} ${outerStyles || ""}`.trim();

  return (
    <div onClick={onClick} className={classes}>
      <FontAwesomeIcon icon={faSlidersH} /> Filter
    </div>
  );
};

export default FilterButton;
