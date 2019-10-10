import React from "react";
import randomLLama from "../../assets/images/llama-silhouette-by-vexels.png";
import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  noResults: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem"
  },
  noResults__title: {
    width: "100%",
    fontSize: "1.2rem",
    textAlign: "center"
  },
  noResults__img: {
    width: "auto",
    minHeight: "300px",
    height: "50vh",
    transition: "250ms height ease-in"
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
