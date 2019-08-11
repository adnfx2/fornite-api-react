import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import * as Actions from "../../redux/actions/actions";
import Snippet from "./Snippet";

const renderItems = news =>
  news
    ? news.map(({ title, image, ...props }) => (
        <Carousel.Item key={title}>
          <img className="d-block w-100" src={image} alt="title" />
          <Carousel.Caption>
            <Snippet title={title} {...props} />
          </Carousel.Caption>
        </Carousel.Item>
      ))
    : "no content";

class NewsFeed extends React.Component {
  componentDidMount() {
    const { loadNews, news } = this.props;
    if (!news.data) {
      loadNews();
    }
  }
  render() {
    const { news } = this.props;
    return (
      <div>
        <Carousel indicators={false} fade={true}>
          {renderItems(news)}
        </Carousel>
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
