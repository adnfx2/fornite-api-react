import React from "react";
import { createUseStyles } from "react-jss";

//Constants
const BLINKING = "blinking--animation";
const BG_COLOR = "#c6c6c6";

//  ***Global style***
const animationStyle = `${BLINKING} 2000ms ease-in-out infinite`;
const useBlinkingAnimationStyle = createUseStyles({
  [`@global`]: {
    // Name convention needed to avoid future conflicts (Because of being global).
    [`@keyframes ${BLINKING}`]: {
      [`0%`]: { opacity: 1 },
      [`50%`]: { opacity: 0.7 },
      [`100%`]: { opacity: 1 }
    }
  }
});

//  ***LAYOUTS***

//  Placeholder
const usePlaceholderStyle = createUseStyles({
  placeholder: {
    border: "0.25rem",
    boxShadow: `0px 0px 4px rgba(0,0,0,0.3)`
  }
});
const Placeholder = ({ children, className = "" }) => {
  useBlinkingAnimationStyle();
  const { placeholder } = usePlaceholderStyle();
  return <div className={`${placeholder} ${className}`.trim()}>{children}</div>;
};

//  Header
const useHeaderStyle = createUseStyles({
  placeholder__header: { padding: "1em" }
});
const Header = ({ children }) => {
  const { placeholder__header } = useHeaderStyle();
  return <div className={placeholder__header}>{children}</div>;
};

//  Body
const useBodyStyle = createUseStyles({
  placeholder__body: { padding: "1em" }
});
const Body = ({ children }) => {
  const { placeholder__body } = useBodyStyle();
  return <div className={placeholder__body}>{children}</div>;
};

//  Title
const useTitleStyle = createUseStyles({
  placeholder__title: { padding: "0 1.25em" }
});
const Title = ({ children }) => {
  const { placeholder__title } = useTitleStyle();
  return <div className={placeholder__title}>{children}</div>;
};

//  Footer
const useFooterStyle = createUseStyles({
  placeholder__footer: { padding: "1em" }
});
const Footer = ({ children }) => {
  const { placeholder__footer } = useFooterStyle();
  return <div className={placeholder__footer}>{children}</div>;
};

//  ***BASIC COMPONENTS***

//  Text
const usePlaceholderTextStyle = createUseStyles({
  placeholder__text: {
    width: "100%",
    height: size => `${size}px`,
    borderRadius: "8px",
    background: `${BG_COLOR}`,
    animation: animationStyle,
    [`&.splitted`]: {
      flex: "0 1 calc(50% - 4px)",
      margin: "2px 0"
    }
  }
});
const Text = props => {
  const { variant = "sm", splitted } = props;
  const size =
    //  prettier-ignore
    variant === "sm"
      ? 10
      : variant === "md"
        ? 20
        : 40;
  const { placeholder__text } = usePlaceholderTextStyle(size);
  return (
    <div
      className={`${placeholder__text} ${splitted ? "splitted" : ""}`.trim()}
    />
  );
};

//  Image
const usePlaceholderImageStyle = createUseStyles({
  placeholder__image: {
    display: "flex",
    position: "relative",
    width: "100%",
    padding: "0 1em",
    height: "220px",
    [`&::after`]: {
      content: `""`,
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      background: `${BG_COLOR}`,
      animation: `${animationStyle}`
    }
  }
});
const Image = props => {
  const { placeholder__image } = usePlaceholderImageStyle();
  return <div className={placeholder__image} />;
};

//  Circle
const useCircleStyle = createUseStyles({
  circle: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: size => `${size}px`,
    margin: "2px 0",
    [`&::after`]: {
      content: `""`,
      width: size => `${size}px`,
      height: "100%",
      borderRadius: "50%",
      background: `${BG_COLOR}`,
      animation: `${animationStyle}`
    }
  }
});
const Circle = ({ variant = "sm" }) => {
  const size =
    //  prettier-ignore
    variant === "sm"
      ? 10
      : variant === "md"
        ? 20
        : 40;
  const { circle } = useCircleStyle(size);
  return <div className={circle} />;
};

//  ***ASSEMBLED COMPONENTS***

//  Paragraph
const useParagraphStyle = createUseStyles({
  placeholder__paragraph: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
  }
});
const Paragraph = ({ lines = 1 }) => {
  const { placeholder__paragraph } = useParagraphStyle();
  return (
    <div className={placeholder__paragraph}>
      {Array.from(Array(lines)).map((_, index) => (
        <React.Fragment key={index}>
          <Text variant="sm" splitted />
          <Text variant="sm" splitted />
        </React.Fragment>
      ))}
    </div>
  );
};

//  Ellipsis
const useEllipsisStyle = createUseStyles({
  placeholder__ellipsis: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-around"
  }
});
const Ellipsis = ({ quantity = 3, className = "" }) => {
  const { placeholder__ellipsis } = useEllipsisStyle();
  return (
    <div className={`${placeholder__ellipsis} ${className}`.trim()}>
      {Array.from(Array(quantity)).map((_, index) => (
        <React.Fragment key={index}>
          <Circle variant="sm" />
        </React.Fragment>
      ))}
    </div>
  );
};

Placeholder.Header = Header;
Placeholder.Title = Title;
Placeholder.Body = Body;
Placeholder.Footer = Footer;

Placeholder.Text = Text;
Placeholder.Image = Image;
Placeholder.Circle = Circle;

Placeholder.Paragraph = Paragraph;
Placeholder.Ellipsis = Ellipsis;

export default Placeholder;
