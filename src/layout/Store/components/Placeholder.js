import React from "react";
import { createUseStyles } from "react-jss";

//  Global style
const BLINKING = "blinking--animation";
const animationStyle = `${BLINKING} 1750ms ease-in-out infinite`;
const useBlinkingAnimationStyle = createUseStyles({
  [`@global`]: {
    // Name convention needed to avoid future conflicts.
    [`@keyframes ${BLINKING}`]: {
      [`0%`]: { opacity: 1 },
      [`50%`]: { opacity: 0.7 },
      [`100%`]: { opacity: 1 }
    }
  }
});

//  Text
const usePlaceholderTextStyle = createUseStyles({
  placeholder__text: {
    width: "100%",
    height: variant => {
      const size =
        //  prettier-ignore
        variant === "sm"
          ? 10
          : variant === "md"
            ? 20
            : 40;
      console.log({ size });
      return `${size}px`;
    },
    borderRadius: "8px",
    background: "#bbb",
    animation: animationStyle,
    flex: "0 1 calc(50% - 4px)",
    margin: "2px 0"
  }
});
const Text = props => {
  const { variant } = props;
  const { placeholder__text } = usePlaceholderTextStyle(variant);
  return <div className={placeholder__text} />;
};

//  Image
const usePlaceholderImageStyle = createUseStyles({
  placeholder__image: {
    display: "flex",
    position: "relative",
    width: "100%",
    padding: "1em",
    height: "250px",
    [`&::after`]: {
      content: `""`,
      width: "100%",
      height: "100%",
      borderRadius: "8px",
      background: "#bbb",
      animation: `${BLINKING} 1750ms ease-in-out infinite`
    }
  }
});
const Image = props => {
  const { placeholder__image } = usePlaceholderImageStyle();
  return <div className={placeholder__image} />;
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
  placeholder__body: { padding: "0 1.35em" }
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

//  Placeholder container
const usePlaceholderStyle = createUseStyles({
  placeholder: {
    border: "0.25rem",
    boxShadow: `0px 0px 4px rgba(0,0,0,0.3)`
  }
});
const Placeholder = props => {
  useBlinkingAnimationStyle();
  const { placeholder } = usePlaceholderStyle();
  return (
    <div className={placeholder}>
      <Header>
        <Text />
      </Header>
      <Image />
      <Title>
        <Text />
      </Title>
      <Body>
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-around",
            padding: "0.25em 0"
          }}
        >
          <Text variant="sm" />
          <Text variant="sm" />
          <Text variant="sm" />
          <Text variant="sm" />
          <Text variant="sm" />
          <Text variant="sm" />
        </div>
      </Body>
      <Footer>
        <Text />
      </Footer>
    </div>
  );
};

export default Placeholder;
