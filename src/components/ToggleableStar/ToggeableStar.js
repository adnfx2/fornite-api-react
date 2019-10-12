import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
  isStarred,
  className,
  filterId,
  text,
  ...props
}) => {
  const styles = useStyles();
  const [toggle, setToggle] = useState(isStarred);
  const handler = e => {
    setToggle(prevToggle => {
      const newToggle = !prevToggle;
      actionHandler({
        target: { dataset: { filterId: filterId }, value: newToggle }
      });
      return newToggle;
    });
  };

  return (
    <div
      {...props}
      className={`${styles.star} ${className || ""}`.trim()}
      onClick={handler}
    >
      {text}{" "}
      <FontAwesomeIcon
        icon={faStar}
        className={`${styles.star__icon} ${toggle ? "active" : ""}`.trim()}
      />
    </div>
  );
};

export default ToggeableStar;
