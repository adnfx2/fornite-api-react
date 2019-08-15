import React from "react";

const ComponentFactory = ({ children, quantity = 1 }) => {
  const maxComponents = Array.from(Array(quantity));
  return maxComponents.map(() => children);
};

export default ComponentFactory;
