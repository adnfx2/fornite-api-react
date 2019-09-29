import React from "react";
import { createUseStyles } from "react-jss";

const useSearchSelectStyle = createUseStyles({
  select: {
    display: "inline-block",
    background: "#f4f4f4",
    padding: "8px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid rgba(0,0,0,.3)",
    [`&:focus`]: {
      border: "1px solid #555",
      outline: "none"
    }
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
