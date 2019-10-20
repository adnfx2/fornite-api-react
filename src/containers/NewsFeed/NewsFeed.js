import React, { useEffect } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import { fetchNews } from "../../redux/actions/actions";
import NetworkError from "../../components/NetworkError/NetworkError";
import Snippet from "./Snippet";
import FlexBackground from "./FlexBackground";
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
    color: "#4c4c4c"
  }
});

const NewsFeed = props => {
  const { loadNews, news, errorMsg } = props;
  useEffect(() => {
    if (!news) {
      loadNews();
    }
  }, []); //eslint-disable-line
  const reloadHandler = () => {
    loadNews();
  };
  const styles = useStyles();
  return (
    <div className={styles.containerCarousel}>
      <h5 className={styles.carousel__title}>Recent feed</h5>
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
          {!errorMsg ? (
            [...Array(5)].map((_, i) => (
              <Spinner key={i} animation="grow" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ))
          ) : (
            <NetworkError
              errorMsg={`${errorMsg}, Click here to reload!`}
              className={styles.carousel__error}
              reloadHandler={reloadHandler}
            />
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
    news:
      news &&
      news.data &&
      news.data.reverse() /*Fix to not show broken images first due to thirdparty api issues*/,
    errorMsg: error
  };
};

const mapDispatchToProps = {
  loadNews: fetchNews
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);
