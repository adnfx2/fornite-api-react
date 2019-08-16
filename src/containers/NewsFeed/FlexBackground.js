import React from "react";
import { createUseStyles } from "react-jss";
import color from "color";
import { deviceWidth } from "../../styles/variables";

const useStyles = createUseStyles({
  carousel__img: {
    composes: ["d-flex justify-content-center align-items-center"],
    height: "50vh",
    backgroundColor: "slategray",
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [`@media (min-width: ${deviceWidth.sm})`]: {
      height: "75vh",
    }
  }
});

const FlexBackground = ({ children, ...props }) => {
  const classes = useStyles(props);
  return <div className={classes.carousel__img}>{children}</div>;
};

export default FlexBackground;
