import React from "react";

const List = ({ renderItem, items, classes }) => {
  const array =
    items &&
    ((Array.isArray(items) && items) ||
      (Array.isArray(items.keys) && items.keys));

  if (!array) {
    throw new Error(
      `Error: List invalid proptype, items must be an array or an object with a 'keys' fields of type array`
    );
  }

  return (
    <ul className={classes}>
      {array.map(item =>
        renderItem((items.keys && { itemRef: item, item: items[item] }) || item)
      )}
    </ul>
  );
};
export default List;
