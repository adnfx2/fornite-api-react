import React, { useState } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import usePagination from "../../../hooks/usePagination";
import Placeholder from './Placeholder.js';

const renderWeapon = weapon => {
  const { name, image, rarity, id } = weapon;
  return (
    <Card key={id} style={{ flex: "1 1 100%", maxWidth: "100%" }}>
      <Card.Header as="h5">{rarity.slice(1)}</Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
        <Card.Title>{name}</Card.Title>
        <Button style={{ marginLeft: "auto" }} variant="primary">
          Give star
        </Button>
      </Card.Body>
    </Card>
  );
};

const ListWeapons = ({ data = { weaponsById: {}, result: [] } }) => {
  const [weaponsSlice, nextPage, loadMoreHandler] = usePagination(data.result)
  if (weaponsSlice.length) {
    const { weaponsById } = data;

    return (
      <div>
        {weaponsSlice.map(id => 
          renderWeapon(weaponsById[id]))}
        {//prettier-ignore
        nextPage
            ? <button onClick={loadMoreHandler}>LoadMore</button>
            : "that's it"}
      </div>
    );
  } else {
    return <Placeholder />;
  }
};

export default ListWeapons;
