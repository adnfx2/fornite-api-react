import React from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import * as Actions from "../../redux/actions/actions";
import Snippet from "./Snippet";
import FlexBackground from "./FlexBackground";
import ComponentsFactory from "../../components/ComponentsFactory/ComponentsFactory";
class NewsFeed extends React.Component {
  componentDidMount() {
    const { loadNews, news } = this.props;
    if (!news.length) {
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
