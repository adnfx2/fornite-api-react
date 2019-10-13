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

const RadioButton = ({ compId, label, groupName, checked, onChange }) => {
  const classes = useStyle();
  const handler = e => onChange(e, { compId, value: label });
  return (
    <label className={classes.radioButton}>
      <input checked={checked} onChange={handler} type="radio" />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
