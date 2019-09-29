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

const RadioButton = ({ label, groupName }) => {
  const classes = useStyle();
  return (
    <label className={classes.radioButton} key={"name"}>
      <input type="radio" name={groupName} />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
