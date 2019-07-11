import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/actions";
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class Gallery extends Component {
  componentDidMount() {
    const { loadItems, items } = this.props;
    if (!items) {
      loadItems();
    }
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
          <Card inverse style={{ background: "slategray" }}>
            <CardHeader className="text-right text-uppercase small">
              {rarity}
            </CardHeader>
            <CardImg
              className="p-2"
              top
              width="100%"
              src={images.icon}
              alt={`${name} image`}
            />
            <CardBody className="d-flex flex-column">
              <CardTitle>{name}</CardTitle>
              <CardText className="small">{description}</CardText>
              <Button
                className="mt-auto"
                color="primary"
              >{`Buy ${cost} $`}</Button>
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
  loadItems: () => {
    dispatch(Actions.fetchItems());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
