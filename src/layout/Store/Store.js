import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import FilterButton from "./components/FilterButton";
import { fetchWeapons, fetchItems } from "../../redux/actions/actions";
import { ENDPOINT_WEAPONS, ENDPOINT_ITEMS } from "../../utils/api/api";
import { storeLinks } from "../../routes/routes";

const useStyle = createUseStyles({
  //todo
});

const useShouldFetch = (data, dispatcher) => {
  useEffect(() => {
    if (!data) {
      dispatcher();
    }
  });
};

const Store = props => {
  const { weapons, fetchWeapons, items, fetchItems } = props;
  // useShouldFetch(weapons, fetchWeapons);
  // useShouldFetch(items, fetchItems);

  return (
    <Container className="mx-1 mb-3 text-dark" fluid>
      <Row>
        <Col>
          <h1 className="text-center p-5">Title</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex px-0">
          {storeLinks.map(link => (
            <NavLink
              className="d-flex justify-content-center align-items-center flex-fill border-bottom text-dark text-decoration-none"
              activeClassName="border-primary"
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
          <FilterButton />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ dataFetched, errors }) => {
  const array = [ENDPOINT_WEAPONS, ENDPOINT_ITEMS];
  const [weapons, items] = array.map(el => {
    const key = el.split("/")[0];
    return { data: dataFetched[key], error: errors.apiErrors[key] };
  });

  return {
    weapons: weapons.data,
    weaponsErrorMsg: weapons.error,
    items: items.data,
    itemsErrorMsg: items.error,
    filter: "none"
  };
};

const mapDispatchToProps = { fetchWeapons, fetchItems };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);
