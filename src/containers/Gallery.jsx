import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/actions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Gallery extends Component {
  componentDidMount() {
    const { loadItems } = this.props;
    loadItems();
  }

  renderCards = items =>
    items.map(items => {
      const {
        itemId,
        item: { images, name, rarity, description, cost }
      } = items;

      return (
        <li
          className="col-sm-6 col-md-4 col-lg-3 d-flex mb-2 align-items-stretch"
          key={itemId}
        >
          <Card inverse style={{ background: "teal" }}>
            <CardImg top width="100%" src={images.icon} alt={`${name} image`} />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardSubtitle>{`rarity: ${rarity}`}</CardSubtitle>
              <CardText>{description}</CardText>
              <Button color="primary">{`Buy ${cost} $`}</Button>
            </CardBody>
          </Card>
        </li>
      );
    });

  render() {
    const { items } = this.props;
    return (
      <div className="container">
        <ul className="row">{items && this.renderCards(items)}</ul>
      </div>
    );
  }
}

// Get 10 or less elements from an array
const getFewElements = array => {
  const newArray = [];
  if (!array || array.length < 10) return;

  for (var i = 0; i < 10; i++) {
    newArray.push(array[i]);
  }
  return newArray;
};

const mapStateToProps = state => ({
  items: getFewElements(state.data)
});

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(Actions.fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
