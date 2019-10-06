import React from "react";
import { createUseStyles } from "react-jss";
import RadioButton from "../RadioButton/RadioButton";

const useRadioGroupStyle = createUseStyles({
  radioGroup: {
    display: "flex",
    flexFlow: "column wrap"
  }
});

const RadioGroup = ({ config, className, value, onChange, ...props }) => {
  const { groupName, options } = config;
  const classes = useRadioGroupStyle();
  const finalValue = value || options[0].label;

  return (
    <div className={`${classes.radioGroup} ${className || ""}`.trim()}>
      {options.map(option => (
        <RadioButton
          key={option.label}
          checked={finalValue === option.label}
          onChange={onChange}
          label={option.label}
          groupName={groupName}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
