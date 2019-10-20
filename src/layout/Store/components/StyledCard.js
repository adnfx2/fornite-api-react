import React from "react";
import { Button, Card } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { fortniteColors } from "../../../styles/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { breakpoints } from "../../../styles/variables";
import { firstLetterCaps } from "../../../utils/textUtils";

const getFortniteColor = rarity => fortniteColors.rarities[rarity];
const gutter = "12px";

const useStyledCard = createUseStyles({
  hideOverflow: {
    overflow: "scroll",
    whiteSpace: "nowrap",
    scrollbarWidth: "none",
    [`&::-webkit-scrollbar`]: {
      display: "none"
    }
  },
  card: {
    composes: ["flex-fill"],
    border: "none",
    margin: "6px !important",
    background: "#fff",
    boxShadow: `0px 0px 4px rgba(0,0,0,0.3)`,
    [`@media only screen and (min-width: ${breakpoints.sm}px)`]: {
      maxWidth: `calc(50% - ${gutter})`
    },
    [`@media only screen and (min-width: ${breakpoints.md}px)`]: {
      maxWidth: `calc(33.33% - ${gutter})`
    },
    [`@media only screen and (min-width: ${breakpoints.xl}px)`]: {
      maxWidth: `calc(25% - ${gutter})`
    }
  },
  card__header: {
    display: "flex",
    alignItems: "center",
    [`&::after`]: {
      content: `""`,
      display: "inline-block",
      width: "calc(16px + 0.1vw)",
      height: "calc(16px + 0.1vw)",
      borderRadius: "50%",
      marginLeft: "0.5em",
      backgroundColor: ({ rarity }) => getFortniteColor(rarity) || "#000"
    }
  },
  card__attributes: {
    composes: ["d-flex flex-wrap"],
    fontSize: "13px",
    display: "flex",
    justifyContent: "space-between"
  },
  card__attribute: {
    flex: "0 1 48%",
    textOverflow: "ellipsis"
  },
  card__image: {
    width: "55%",
    height: "auto",
    margin: "1em auto 0",
    backgroundColor: ({ type }) =>
      type === "_emote" ? "rgba(0,0,0,.3)" : "transparent"
  },
  star: {
    color: "rgba(0,0,0,0.3)",
    [`&.active`]: {
      color: "orange"
    }
  }
});

const StyledCard = ({ data, starredCards, starredsHandler }) => {
  const { id, name, image, rarity, attributes } = data;
  const isCardStarred = starredCards[id] ? true : false;
  const { addToStarreds, removeFromStarreds } = starredsHandler;
  const handler = e =>
    isCardStarred
      ? removeFromStarreds(id)
      : addToStarreds({ id, timestamp: Date.now() });
  const type = data.type || null;
  const styles = useStyledCard({ rarity, type });

  return (
    <Card className={styles.card}>
      <Card.Header>
        <h5 className={styles.card__header}>
          {firstLetterCaps(rarity.slice(1))}
        </h5>
      </Card.Header>
      <Card.Img variant="top" src={image} className={styles.card__image} />
      <Card.Body>
        <Card.Title className={styles.hideOverflow}>{name}</Card.Title>
        <Card.Text className={styles.card__attributes}>
          {attributes.map((attr, i) => (
            <span
              key={i}
              className={`${styles.card__attribute} ${styles.hideOverflow}`}
            >
              {attr}
            </span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex">
        <Button onClick={handler} variant="light" className="border ml-auto">
          Give star{" "}
          <FontAwesomeIcon
            className={`${styles.star} ${isCardStarred ? "active" : ""}`}
            icon={faStar}
          />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default StyledCard;
