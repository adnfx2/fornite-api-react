import React from "react";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styles/variables";
import chestImage from "../../assets/images/chest-lq.png";

const useStyles = createUseStyles({
  dashboard: {
    composes: ["d-flex p-2"],
    flexWrap: "wrap",
    color: "#fff",
    textShadow: "2px 2px 8px #212529",
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      flexWrap: "nowrap",
      alignItems: "center"
    }
  },
  title: {
    composes: ["mt-3 mb-5"],
    fontFamily: "var(--fortnite-font)"
  },
  img: {
    composes: "p-2",
    width: "100%",
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      width: "auto"
    }
  }
});

const Dashboard = props => {
  const styles = useStyles();

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>
        Ain't nothing here, come back another day!
      </h1>
      <img
        className={styles.img}
        src={chestImage}
        alt="I'm not lying there's nothing here!"
      />
    </div>
  );
};

export default Dashboard;
