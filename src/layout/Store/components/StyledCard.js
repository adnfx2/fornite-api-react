import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import usePagination from "../../../hooks/usePagination";
import Placeholder from "./Placeholder.js";
import { fortniteColors } from "../../../styles/variables";
import color from "color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const getFortniteColor = rarity => fortniteColors.rarities[rarity];
const firstLetterCaps = l => l[0].toUpperCase() + l.slice(1);

const useStyledCard = createUseStyles({
  card: {
    border: "none",
    background: "#fff",
    boxShadow: `0px 0px 4px rgba(0,0,0,0.3)`
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
      backgroundColor: ({ rarity }) => getFortniteColor(rarity)
    }
  },
  card__attributes: {
    composes: ["d-flex flex-wrap"],
    fontSize: "13px",
    display: "flex"
  },
  card__attribute: {
    flex: "1 1 50%"
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
  const handler = () => console.log("hi") || setBtn(_ => !_);
  /*end test*/
  const { id, name, image, rarity, attributes } = data;
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
        <Card.Title>{name}</Card.Title>
        <Card.Text className={classes.card__attributes}>
          {attributes.map((attr, i) => (
            <span key={i} className={classes.card__attribute}>
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
