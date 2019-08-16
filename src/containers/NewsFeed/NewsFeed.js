import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import * as Actions from "../../redux/actions/actions";
import Snippet from "./Snippet";
import FlexBackground from "./FlexBackground";
import ComponentsFactory from "../../components/ComponentsFactory/ComponentsFactory";
import { createUseStyles } from "react-jss";
import { deviceWidth } from "../../styles/variables";

const useStyles = createUseStyles({
  ["container--carousel"]: {
    composes: ["bg-dark position-relative"],
    transition: "padding 500ms ease-in-out",
    [`@media (min-width: ${deviceWidth.sm})`]: {
      padding: "0 5vw"
    }
  },
  carousel__title: {
    composes: ["position-absolute bg-warning text-light font-weight-bolder"],
    fontSize: "90%",
    top: "5%",
    left: "3%",
    padding: ".8% 2.8%",
    borderRadius: "10px",
    boxShadow: "0 0 8px yellow",
    letterSpacing: "1px",
    zIndex: "10",
    [`@media (min-width: ${deviceWidth.sm})`]: {
      top: "5%",
      left: "8%"
    }
  }
});

const NewsFeed = props => {
  const { loadNews, news } = props;
  useEffect(() => {
    if (!news.length) {
      loadNews();
    }
  });
  const classes = useStyles();
  return (
    <div className={classes["container--carousel"]}>
      <h5 className={classes.carousel__title}>Recent feed</h5>
      {news.length > 0 ? (
        <Carousel indicators={false} fade={true}>
          {news.map(({ title, image, ...props }) => (
            <Carousel.Item key={title}>
              <FlexBackground image={image} />
              <Carousel.Caption>
                <Snippet title={title} {...props} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <FlexBackground>
          <ComponentsFactory quantity={5}>
            <Spinner animation="grow" role="status" variant="light">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </ComponentsFactory>
        </FlexBackground>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  news: state.news.data
});

const mapDispatchToProps = {
  loadNews: Actions.fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
