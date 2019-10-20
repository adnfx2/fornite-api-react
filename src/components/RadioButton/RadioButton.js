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
  const styles = useStyle();
  const handler = e => onChange(e, { compId, value: label });
  return (
    <label className={styles.radioButton}>
      <input checked={checked} onChange={handler} type="radio" />
      <span className={styles.label}>{label}</span>
    </label>
  );
};

export default RadioButton;
