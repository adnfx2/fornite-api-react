import React from "react";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styles/variables";

const useStyles = createUseStyles({
  carousel__img: {
    composes: ["d-flex justify-content-center align-items-center"],
    height: "50vh",
    backgroundColor: "slategray",
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      height: "89vh",
    }
  }
});

const FlexBackground = ({ children, ...props }) => {
  const styles = useStyles(props);
  return <div className={styles.carousel__img}>{children}</div>;
};

export default FlexBackground;
