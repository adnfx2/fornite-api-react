import React from "react";

const List = ({ renderItem, items, classes }) => (
  <ul className={classes}>{items.map(item => renderItem(item))}</ul>
);

export default List;
