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

const RadioButton = ({ label, groupName, checked, onChange }) => {
  const classes = useStyle();
  const _handler = e => onChange(e, label);

  return (
    <label className={classes.radioButton}>
      <input
        onChange={_handler}
        checked={checked}
        type="radio"
        name={groupName}
      />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
