// Useless component -- needs to be removed
const ComponentFactory = ({ children, quantity = 1 }) => {
  const maxComponents = Array.from(Array(quantity));
  return maxComponents.map(() => children);
};

export default ComponentFactory;
