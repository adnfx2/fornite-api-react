import React from "react";
import { createUseStyles } from "react-jss";

const useSearchSelectStyle = createUseStyles({
  searchSelect: {}
});

const Option = ({ name }) => {
  return <option value={name}>{name}</option>;
};

const SearchSelect = ({ config, className, ...props }) => {
  const { options } = config;
  const classes = useSearchSelectStyle();
  return (
    <div className={`${classes.searchSelect} ${className || ""}`.trim()}>
      <select style={{borderRadius: "10px"}}>
        {options.map(option => (
          <Option name={option} />
        ))}
      </select>
    </div>
  );
};

export default SearchSelect;
