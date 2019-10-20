import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "network-error": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  },
  message: {
    marginLeft: ".5rem"
  }
});

const NetworkError = ({ errorMsg, reloadHandler, className }) => {
  const styles = useStyles();
  return (
    <div onClick={reloadHandler} className={className}>
      <div className={styles["network-error"]}>
        <span>
          <FontAwesomeIcon icon={faUnlink} />
        </span>
        <span className={styles.message}>{errorMsg}</span>
      </div>
    </div>
  );
};

export default NetworkError;
