import React from "react";
import randomLLama from "../../assets/images/llama-silhouette-by-vexels.png";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styles/variables";

const useStyle = createUseStyles({
  noResults: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    height: "100%"
  },
  noResults__title: {
    width: "100%",
    fontSize: "1.8rem",
    textAlign: "center",
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      flex: 2
    }
  },
  noResults__img: {
    width: "auto",
    minHeight: "300px",
    height: "50vh",
    transition: "250ms height ease-in",
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      flex: 1
    }
  }
});

const NoSearchFound = ({ className, ...props }) => {
  const styles = useStyle();

  return (
    <div {...props} className={styles.noResults}>
      <p className={styles.noResults__title}>No results found...</p>
      <img
        className={styles.noResults__img}
        src={randomLLama}
        alt="A lost llama"
      />
    </div>
  );
};

export default NoSearchFound;
