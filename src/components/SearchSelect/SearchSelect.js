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

const Option = ({ name }) => <option value={name}>{name}</option>;

const renderOptions = options => {
  if (options.length) {
    return options.map(option => <Option key={option} name={option} />);
  }
};

const SearchSelect = ({ options, className, value, filterId, ...props }) => {
  const classes = useSearchSelectStyle();
  const finalValue = value || options[0];
  return (
    <select
      {...props}
      data-filter-id={filterId}
      value={finalValue}
      disabled={!options.length}
      className={`${classes.select} ${className || ""}`.trim()}
    >
      {renderOptions(options)}
    </select>
  );
};

export default SearchSelect;
