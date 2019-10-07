import React from "react";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  radioButton: {
    display: "flex",
    alignItems: "center",
    padding: ".5rem 0",
    margin: 0
  },
  label: {
    paddingLeft: ".25rem",
    fontSize: ".8rem"
  }
});

const RadioButton = ({ filterId, label, groupName, checked, onChange }) => {
  const classes = useStyle();
  const _handler = e => {
    e.target.value = label;
    onChange(e);
  };
  return (
    <label className={classes.radioButton}>
      <input
        checked={checked}
        data-filter-id={filterId}
        onChange={_handler}
        type="radio"
        name={groupName}
      />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
