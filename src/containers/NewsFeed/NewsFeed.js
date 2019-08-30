import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import { fetchNews } from "../../redux/actions/actions";
import Snippet from "./Snippet";
import FlexBackground from "./FlexBackground";
import ComponentsFactory from "../../components/ComponentsFactory/ComponentsFactory";
import { createUseStyles } from "react-jss";
import { deviceWidthPX } from "../../styles/variables";
import { ENDPOINT_NEWS_STW } from "../../utils/api/api";

const useStyles = createUseStyles({
  containerCarousel: {
    composes: ["bg-dark position-relative"],
    transition: "padding 500ms ease-in-out",
    [`@media (min-width: ${deviceWidthPX.sm}px)`]: {
      padding: "0 5vw"
    }
  },
  carousel__title: {
    composes: ["position-absolute font-weight-bolder"],
    fontSize: "90%",
    color: "white",
    top: "5%",
    left: "3%",
    padding: ".8% 2.8%",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(255,255,255,.2)",
    letterSpacing: "1px",
    zIndex: "10",
    [`@media (min-width: ${deviceWidthPX.sm}px)`]: {
      top: "5%",
      left: "8%"
    }
  }
});

const NewsFeed = props => {
  const { loadNews, news } = props;
  useEffect(() => {
    if (!news) {
      loadNews();
    }
  });
  console.log({ news });
  const classes = useStyles();
  return (
    <div className={classes.containerCarousel}>
      <h5 className={classes.carousel__title}>Recent feed</h5>
      {news ? (
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

const mapStateToProps = ({ dataFetched }) => {
  const newsKey = ENDPOINT_NEWS_STW.split("/")[0];
  const news = dataFetched[newsKey];
  return {
    news: news && news.data
  };
};

const mapDispatchToProps = {
  loadNews: fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
