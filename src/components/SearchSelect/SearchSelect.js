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

const renderOptions = options => {
  if (!options) return;
  return options.map(option => <Option key={option} name={option} />);
};

const SearchSelect = ({ config, className, forwardRef, ...props }) => {
  const { options } = config;
  const classes = useSearchSelectStyle();

  return (
    <select
      {...props}
      ref={forwardRef}
      className={`${classes.select} ${className || ""}`.trim()}
    >
      {renderOptions(options)}
    </select>
  );
};

export default SearchSelect;
