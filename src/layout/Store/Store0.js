import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import SideOverlay from "../../components/SideOverlay/SideOverlay";
import { Col, Row, Container, Button, Card, CardGroup } from "react-bootstrap";
import List from "../../components/List/List";
import { breakpoints, rarityColors } from "../../styles/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import ResponsiveFilter from "./components/ResponsiveFilter";
import { fetchWeapons } from "../../redux/actions/actions";
import color from "color";

/*test*/
const weapons = JSON.parse(localStorage.getItem("weapons/get")) || {
  weapons: { weaponsById: [], result: [] }
};

const {
  weapons: { weaponsById, result: weaponsList }
} = weapons;

console.log({ weapons });

const c = color(rarityColors._legendary);
const cBase = c
  .hsl()
  .round()
  .string();
const cLight = c
  .lighten(0.3)
  .hsl()
  .round()
  .string();
console.log({ cBase, cLight });
const sty = { background: `radial-gradient(${cLight}, ${cBase})` };

const renderWeapon = id => {
  const { name, image, rarity } = weaponsById[id];
  return (
    <Card key={id} style={{ flex: "1 1 100%", maxWidth: "100%", ...sty }}>
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
/*end test*/

const useStyle = createUseStyles({
  container: {
    backgroundColor: "#eee",
    display: "flex",
    flexFlow: "row wrap"
  }
});

const max = 10;
const Store = props => {
  /*test*/
  const [weaponsPage, setWeaponsPage] = useState({
    currentPage: 1,
    totalPages: Math.ceil(weaponsList.length / max)
  });
  const chunkSize = weaponsPage.currentPage * max;
  const data = weaponsList.slice(0, chunkSize);
  const handler = () => {
    setWeaponsPage(prev => ({ ...prev, currentPage: prev.currentPage + 1 }));
  };
  /*end test*/

  const [sideOverlayActive, setSideOverlayActive] = useState(false);

  const filterButtonHandler = e =>
    setSideOverlayActive(prevState => !prevState);
  const hideOverlayHandler = () => setSideOverlayActive(false);

  const classes = useStyle();

  return (
    <Container style={{ backgroundColor: "#eee" }} fluid>
      <Row>
        <Col>
          <h1
            style={{
              color: "white",
              backgroundImage:
                "url(https://d23wybgr07mqxm.cloudfront.net/wp-content/uploads/2018/03/31161041/Fortnite-Mobile-Banner.jpg)",
              backgroundSize: "cover"
            }}
            className="w-100 p-5 text-center"
          >
            Store
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="w-100 d-flex p-2 mb-5">
            <span className="flex-fill text-center border-bottom border-primary">
              Item
            </span>
            <span className="flex-fill text-center border-bottom border-secondary">
              Weapon
            </span>
            <div
              onClick={filterButtonHandler}
              className="d-md-none ml-auto px-4 p-y3 border"
            >
              <FontAwesomeIcon icon={faSlidersH} /> Filter
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="px-0">
          <Content pagination={weaponsPage} data={data} onClick={handler} />
        </Col>
        <ResponsiveFilter
          active={sideOverlayActive}
          hideOverlayHandler={hideOverlayHandler}
          render={<FFilter />}
        />
      </Row>
    </Container>
  );
};

export default Store;

const FFilter = () => (
  <div className="border">
    <h3>Sort by</h3>
    <ul>
      <li>i</li>
      <li>i</li>
      <li>i</li>
    </ul>
  </div>
);

const Content = props => {
  const {
    pagination: { currentPage, totalPages }
  } = props;
  return (
    <CardGroup>
      <List items={weaponsList.slice(0, 10)} renderItem={renderWeapon} />
    </CardGroup>
  );
};

// {`<div>
//   {props.data.map(d => (
//     <p key={d}>{d}</p>
//   ))}
//   {//prettier-ignore
//   currentPage < totalPages
//       ? <button onClick={props.onClick}>Load more...</button>
//       : <p>That's all</p>}
// </div>`}
