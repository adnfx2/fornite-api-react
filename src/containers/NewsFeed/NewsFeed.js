import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlink } from "@fortawesome/free-solid-svg-icons";
import { fetchNews } from "../../redux/actions/actions";
import Snippet from "./Snippet";
import FlexBackground from "./FlexBackground";
import ComponentsFactory from "../../components/ComponentsFactory/ComponentsFactory";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../styles/variables";
import { ENDPOINT_NEWS_STW } from "../../utils/api/api";

const useStyles = createUseStyles({
  containerCarousel: {
    composes: ["bg-dark position-relative"],
    transition: "padding 500ms ease-in-out",
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      padding: "0 5vw"
    }
  },
  carousel__title: {
    composes: ["position-absolute font-weight-bolder"],
    fontSize: "90%",
    top: "5%",
    left: "3%",
    padding: ".8% 2.8%",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(255,255,255,.2)",
    color: "white",
    textShadow: "0 0 4px black",
    letterSpacing: "1px",
    zIndex: "10",
    [`@media (min-width: ${breakpoints.sm}px)`]: {
      top: "5%",
      left: "8%"
    }
  },

  carousel__error: {
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#4c4c4c",
    cursor: "pointer"
  }
});

const NewsFeed = props => {
  const { loadNews, news, errorMessage } = props;
  useEffect(() => {
    if (!news) {
      loadNews();
    }
  }, []);
  const reloadHandler = () => {
    loadNews();
  };
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
          {!errorMessage ? (
            <ComponentsFactory quantity={5}>
              <Spinner animation="grow" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            </ComponentsFactory>
          ) : (
            <div onClick={reloadHandler} className={classes.carousel__error}>
              <FontAwesomeIcon icon={faUnlink} /> {errorMessage}, Click here to
              reload!
            </div>
          )}
        </FlexBackground>
      )}
    </div>
  );
};

const mapStateToProps = ({ dataFetched, errors }) => {
  const newsKey = ENDPOINT_NEWS_STW.split("/")[0];
  const news = dataFetched[newsKey];
  const error = errors.apiErrors[newsKey];
  return {
    news: news && news.data,
    errorMessage: error
  };
};

const mapDispatchToProps = {
  loadNews: fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
