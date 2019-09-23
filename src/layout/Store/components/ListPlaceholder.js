import React from "react";
import Placeholder from "../../../components/Placeholder/Placeholder";
import { createUseStyles } from "react-jss";
import { breakpoints } from "../../../styles/variables";

const gutter = "12px";

const useCardPlaceholderStyle = createUseStyles({
  cardPlaceholder: {
    width: `calc(100% - ${gutter})`,
    margin: "6px",
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      maxWidth: `calc(50% - ${gutter})`
    },
    [`@media only screen and (min-width: ${breakpoints.lg}px)`]: {
      maxWidth: `calc(33.33% - ${gutter})`
    },
    [`@media only screen and (min-width: ${breakpoints.xl}px)`]: {
      maxWidth: `calc(25% - ${gutter})`
    }
  }
});
const CardPlaceholder = () => {
  const { cardPlaceholder } = useCardPlaceholderStyle();
  return (
    <Placeholder className={cardPlaceholder}>
      <Placeholder.Header>
        <Placeholder.Text variant="md" />
      </Placeholder.Header>
      <Placeholder.Image />
      <Placeholder.Body>
        <Placeholder.Paragraph lines={3} />
      </Placeholder.Body>
    </Placeholder>
  );
};

const ListPlaceholder = () => (
  <div className="d-flex flex-wrap">
    {Array.from(Array(4)).map((_, i) => (
      <CardPlaceholder key={i} />
    ))}
  </div>
);

export default ListPlaceholder;
