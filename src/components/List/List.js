import React from "react";

const List = ({ renderItem, items, classes }) => {
  if (!Array.isArray(items))
    throw new Error(`Invalid argument type, "items" must be an array`);

  return <ul className={classes}>{items.map(item => renderItem(item))}</ul>;
};
export default List;
