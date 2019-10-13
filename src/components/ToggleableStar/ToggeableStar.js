import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useControlledComponent from "../../hooks/useControlledComponent";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  star: {
    cursor: "pointer"
  },
  [`star__icon`]: {
    color: "rgba(0,0,0,0.3)",
    [`&.active`]: {
      color: "orange"
    }
  }
});

const ToggeableStar = ({
  actionHandler,
  externalState,
  className,
  compId,
  label,
  ...props
}) => {
  const styles = useStyles();
  const [starred, setToggleStarred] = useControlledComponent(externalState);
  const handler = e => {
    setToggleStarred(prevStarred => !prevStarred);
    actionHandler && actionHandler({ compId, value: !starred });
  };

  return (
    <div
      {...props}
      className={`${styles.star} ${className || ""}`.trim()}
      onClick={handler}
    >
      {label}{" "}
      <FontAwesomeIcon
        icon={faStar}
        className={`${styles.star__icon} ${starred ? "active" : ""}`.trim()}
      />
    </div>
  );
};

export default ToggeableStar;
