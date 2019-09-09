import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import SideOverlay from "../../components/SideOverlay/SideOverlay";
import { Col, Row, Container } from "react-bootstrap";
import { breakpoints } from "../../styles/variables";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSlidersH } from "@fortawesome/free-solid-svg-icons";
import ResponsiveFilter from "./components/ResponsiveFilter";

/*test*/
const weapons = JSON.parse(localStorage.getItem("weapons/get"));
const {
  entities: { weaponsById },
  result: weaponsList
} = weapons;
// console.log({ weaponsById, w: weaponsList.slice(0, 20) });
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
    <Container fluid>
      <Row>
        <Col>
          <h1 className="w-100 p-5 text-center">Store</h1>
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
        <Col>
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
    <div>
      {props.data.map(d => (
        <p key={d}>{d}</p>
      ))}
      {//prettier-ignore
        currentPage < totalPages
          ? <button onClick={props.onClick}>Load more...</button>
          : <p>That's all</p>}
    </div>
  );
};
