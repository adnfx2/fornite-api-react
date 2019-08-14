import React from "react";
import { createUseStyles } from "react-jss";
import color from 'color';
const useStyles = createUseStyles({
  carousel__img: {
    height: "50vh",
    backgroundColor: "slategray",
    backgroundImage: props => `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }
});

const FlexImage = props => {
  const classes = useStyles(props);
  return <div className={classes.carousel__img} />;
};

export default FlexImage;
