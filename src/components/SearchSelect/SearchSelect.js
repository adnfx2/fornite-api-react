import React from "react";
import { createUseStyles } from "react-jss";

const useSearchSelectStyle = createUseStyles({
  select: {
    display: "inline-block",
    width: "100%",
    borderRadius: "4px",
    border: "none",
    boxShadow: "0 0 1px #888"
  },
  option: {
    fontSize: "0.8em"
  } 
});

const Option = ({ name }) => {
  return <option value={name}>{name}</option>;
};

const SearchSelect = ({ config, className, ...props }) => {
  const { options } = config;
  const classes = useSearchSelectStyle();
  return (
    <div className={`${className || ""}`.trim()}>
      <select className={classes.select}> 
        {options.map(option => (
          <Option name={option} />
        ))}
      </select>
    </div>
  );
};

export default SearchSelect;
