import React from "react";

const List = ({ renderItem, items, classes }) => {
  if (!Array.isArray(items))
    throw new Error(`Invalid argument type, "items" must be an array`);

  return items.map(item => renderItem(item));
};
export default List;
