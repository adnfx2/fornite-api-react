import React, { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import usePagination from "../../../hooks/usePagination";
import Placeholder from "./Placeholder.js";
import { fortniteColors } from "../../../styles/variables";
import color from "color";

const getColor = rarity => fortniteColors.rarities[rarity];

const getColorGradient = rarity => {
  const colorString = getColor(rarity);
  const c = color(colorString);
  const cBase = c
    .hsl()
    .round()
    .string();
  const cLight = c
    .lighten(0.3)
    .hsl()
    .round()
    .string();
  return `radial-gradient(${cLight}, ${cBase})`;
};

const useStyle = createUseStyles({
  card: {
    border: "none",
    background: rarity => getColorGradient(rarity),
    boxShadow: rarity => `0px 0px 4px ${getColor(rarity)}`
  },
  card__image: {
    width: "60%",
    height: "auto",
    margin: "0 auto"
  }
});

const WeaponCard = ({ weapon }) => {
  const { name, image, rarity, id } = weapon;
  const classes = useStyle(rarity);

  return (
    <Card className={classes.card}>
      <Card.Header>
        <h5>{rarity.slice(1)}</h5>
      </Card.Header>
      <Card.Img variant="top" src={image} className={classes.card__image} />
      <Card.Body style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button style={{ marginLeft: "auto" }} variant="primary">
          Give star
        </Button>
      </Card.Footer>
    </Card>
  );
};

const ListWeapons = ({ data = { weaponsById: {}, result: [] } }) => {
  const [weaponsSlice, nextPage, loadMoreHandler] = usePagination(data.result);
  const classes = useStyle();
  if (weaponsSlice.length) {
    const { weaponsById } = data;
    return (
      <CardGroup>
        {weaponsSlice.map(id => (
          <WeaponCard key={id} weapon={weaponsById[id]} />
        ))}
        {//prettier-ignore
        nextPage
            ? <button onClick={loadMoreHandler}>LoadMore</button>
            : "that's it"}
      </CardGroup>
    );
  } else {
    return <Placeholder />;
  }
};

export default ListWeapons;
