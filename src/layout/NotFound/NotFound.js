import React from "react";
import { createUseStyles } from "react-jss";
import rocketingOutImage from "../../assets/images/fortnite-rocketing.jpg";
const useStyles = createUseStyles({
  "not-found": {
    height: "100vh",
    backgroundColor: "#999",
    backgroundSize: "cover",
    backgroundImage: `url(${rocketingOutImage})`
  },
  title: {
    composes: ["pt-5 pl-3"],
    fontFamily: "var(--fortnite-font)",
    color: "#fff",
    textShadow: "2px 2px 8px #212529"
  }
});

const NotFound = props => {
  const styles = useStyles();

  return (
    <div className={styles["not-found"]}>
      <h1 className={styles.title}>Page not found, RUN!!!</h1>
    </div>
  );
};

export default NotFound;
