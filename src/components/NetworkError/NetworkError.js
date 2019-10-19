import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "network-error": {
    cursor: "pointer"
  },
  message: {
    marginLeft: ".25rem"
  }
});

const NetworkError = ({ errorMsg, reloadHandler, className }) => {
  const styles = useStyles();
  return (
    <div
      onClick={reloadHandler}
      className={`${styles["network-error"]} ${className || ""}`.trim()}
    >
      <FontAwesomeIcon icon={faUnlink} />
      <span className={styles.message}>{errorMsg}</span>
    </div>
  );
};

export default NetworkError;
