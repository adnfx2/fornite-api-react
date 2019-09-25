import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  radioButton: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    paddingLeft: "0.35em",
    fontSize: "0.8em"
  },
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
