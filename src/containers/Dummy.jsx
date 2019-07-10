import React, { Component } from "react";
import { connect } from "react-redux";
import * as Actions from "../redux/actions/actions";

class Dummy extends Component {
  componentDidMount() {
    const { loadItems } = this.props;
    loadItems();
  }

  //not the right key, just testing.
  renderTitles = titles => titles.map(title => <li key={title}>{title}</li>);

  render() {
    const { titles } = this.props;
    return (
      <div>
        <ul>{titles ? this.renderTitles(titles) : ""}</ul>
      </div>
    );
  }
}

// Get 10 or less elements from an array
const getFewElements = array => {
  const newArray = [];
  if (!array || array.length < 10) return;

  for (var i = 0; i < 10; i++) {
    newArray.push(array[i].item.name);
  }
  return newArray;
};

const mapStateToProps = state => ({
  titles: getFewElements(state.data)
});

const mapDispatchToProps = dispatch => ({
  loadItems: () => dispatch(Actions.fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dummy);
