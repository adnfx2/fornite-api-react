import React from "react";
import { createUseStyles } from "react-jss";
import RadioButton from "../RadioButton/RadioButton";

const useRadioGroupStyle = createUseStyles({
  radioGroup: {
    display: "flex",
    flexFlow: "column wrap"
  }
});

const RadioGroup = ({ config, className, ...props }) => {
  const { groupName, options } = config;
  const classes = useRadioGroupStyle();
  return (
    <div className={`${classes.radioGroup} ${className || ""}`.trim()}>
      {options.map(el => (
        <RadioButton label={el.label} groupName={groupName} />
      ))}
    </div>
  );
};

export default RadioGroup;
