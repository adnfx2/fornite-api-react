import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { fortniteColors } from "../../../styles/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { breakpoints } from "../../../styles/variables";
const getFortniteColor = rarity => fortniteColors.rarities[rarity];
const firstLetterCaps = word => word[0].toUpperCase() + word.slice(1);

const gutter = "12px";

const useStyledCard = createUseStyles({
  hideOverflow: {
    overflow: "scroll",
    whiteSpace: "nowrap",
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

const StyledCard = ({ data }) => {
  /*test*/
  const [btn, setBtn] = useState(false);
  const handler = () => setBtn(value => !value);
  /*end test*/
  const { name, image, rarity, attributes } = data;
  const type = data.type || null;
  const classes = useStyledCard({ rarity, type });

  return (
    <Card className={classes.card}>
      <Card.Header>
        <h5 className={classes.card__header}>
          {firstLetterCaps(rarity.slice(1))}
        </h5>
      </Card.Header>
      <Card.Img variant="top" src={image} className={classes.card__image} />
      <Card.Body>
        <Card.Title className={classes.hideOverflow}>{name}</Card.Title>
        <Card.Text className={classes.card__attributes}>
          {attributes.map((attr, i) => (
            <span
              key={i}
              className={`${classes.card__attribute} ${classes.hideOverflow}`}
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
            className={`${classes.star} ${btn ? "active" : ""}`}
            icon={faStar}
          />
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default StyledCard;
