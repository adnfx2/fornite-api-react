import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyle = createUseStyles({
  [`@keyframes blinking`]: {
    [`0%`]: {opacity: 1},
    [`50%`]: {opacity: 0.7},
    [`100%`]: {opacity: 1} 
  },
  placeholder: {
    padding: "1em",
    background: "#ddd"
  },
  placeholder__image: {
      width: "100%",
      height: "250px",
      background: "#bbb",
      animation: "$blinking 1750ms ease-in-out infinite"
  },
  placeholder__text: {
      width: "100%",
      height: "40px",
      marginTop: "1em",
      borderRadius: "8px",
      background: "#bbb",
      animation: "$blinking 1750ms ease-in-out infinite"
    }
});

const BlockImage = props => {
  const { placeholder__image } = useStyle();
  return <div className={placeholder__image} />;
};

const BlockText = props => {
  const { placeholder__text } = useStyle();
  return <div className={placeholder__text} />;
};

const Placeholder = props => {
  const { placeholder } = useStyle(); 
  return (
    <div className={placeholder}>
      <BlockImage />
      <BlockText />
      <BlockText />
    </div>
  );
};

export default Placeholder;
