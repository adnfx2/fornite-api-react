import React from "react";
import { createUseStyles } from "react-jss";
import RadioButton from "../RadioButton/RadioButton";

const useRadioGroupStyle = createUseStyles({
  radioGroup: {
    display: "flex",
    flexFlow: "column wrap"
  }
});

const RadioGroup = ({
  options,
  filterId,
  className,
  value,
  onChange,
  ...props
}) => {
  const classes = useRadioGroupStyle();
  const finalValue = value || options[0];

  return (
    <div className={`${classes.radioGroup} ${className || ""}`.trim()}>
      {options.map(option => (
        <RadioButton
          key={option}
          filterId={filterId}
          checked={finalValue === option}
          onChange={onChange}
          label={option}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
