import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import * as Actions from "../../redux/actions/actions";
import Snippet from "./Snippet";
import FlexImage from "./FlexImage";

class NewsFeed extends React.Component {
  componentDidMount() {
    const { loadNews, news } = this.props;
    if (!news) {
      loadNews();
    }
  }
  render() {
    const { news } = this.props;
    return (
      <div>
        {news.length > 0 ? (
          <Carousel indicators={false} fade={true}>
            {news.map(({ title, image, ...props }) => (
              <Carousel.Item key={title}>
                <FlexImage image={image} />
                <Carousel.Caption>
                  <Snippet title={title} {...props} />
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <div style={{ background: "teal" }}>
            loading...
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

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
