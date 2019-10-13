import React from "react";
import useControlledComponent from "../../hooks/useControlledComponent";
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
  compId,
  className,
  externalState,
  actionHandler,
  ...props
}) => {
  const classes = useRadioGroupStyle();
  const validateState =
    options.find(option => option === externalState) || options[0];
  const [radioSelected, setRadioSelected] = useControlledComponent(
    validateState
  );
  const radioHandler = (e, customDetails) => {
    // Update component state
    setRadioSelected(customDetails.value);
    // Perform extra actions
    actionHandler && actionHandler(customDetails);
  };

  return (
    <div className={`${classes.radioGroup} ${className || ""}`.trim()}>
      {options.map(option => (
        <RadioButton
          key={option}
          compId={compId}
          checked={radioSelected === option}
          onChange={radioHandler}
          label={option}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
