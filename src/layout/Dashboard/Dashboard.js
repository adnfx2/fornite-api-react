import React from "react";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styles/variables";
import chestImage from "../../assets/images/chest-lq.png";

const useStyles = createUseStyles({
  dashboard: {
    composes: ["d-flex p-3"],
    flexWrap: "wrap",
    color: "#fff",
    justifyContent: "center",
    textShadow: "2px 2px 8px #212529",
    [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
      flexWrap: "nowrap",
      alignItems: "center"
    }
  },
  title: {
    composes: ["mt-3 mb-5"],
    fontFamily: "var(--fortnite-font)",
    textAlign: "center",
    [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
      flex: 1
    },
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      flex: 2
    }
  },
  imgWrapper: {
    [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
      flex: 2,
      display: "flex",
      justifyContent: "flex-end"
    }
  },
  img: {
    maxWidth: "100%"
  }
});

const Dashboard = props => {
  const styles = useStyles();

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>
        Ain't nothing here, come back another day!
      </h1>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={chestImage}
          alt="I'm not lying there's nothing here!"
        />
      </div>
    </div>
  );
};

export default Dashboard;
