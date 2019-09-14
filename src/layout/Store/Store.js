import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import FilterButton from "./components/FilterButton";
import { fetchWeapons, fetchItems } from "../../redux/actions/actions";
import { ENDPOINT_WEAPONS, ENDPOINT_ITEMS } from "../../utils/api/api";
import { storeLinks, storeRoutes } from "../../routes/routes";
import fortniteBanner from "../../assets/images/Fortnite-Banner.jpg";

const useStyle = createUseStyles({
  store__title: {
    composes: ["text-center text-light p-5"],
    background: `url(${fortniteBanner}) top center/cover border-box`,
    fontFamily: "var(--fortnite-font)",
    textShadow: "2px 2px 8px #212529"
  }
});

const useShouldFetch = (data, dispatcher) => {
  useEffect(() => {
    if (!data) {
      dispatcher();
    }
  }, []);
};

const Store = props => {
  const { weapons, fetchWeapons, items, fetchItems } = props;
  useShouldFetch(weapons, fetchWeapons);
  useShouldFetch(items, fetchItems);
  const weaponsSorting = null;
  const itemsSorting = null;
  const classes = useStyle();

  return (
    <Container className="mb-3 text-dark" fluid>
      <Row>
        <Col className="px-0">
          <h1 className={classes.store__title}>Store</h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex px-0">
          {storeLinks.map(link => (
            <NavLink
              key={link.name}
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
      <Row>
        <Col>
          <Switch>
            {storeRoutes.map(({ name, ...route }) => {
              if (route.render) {
                const dataKey = `${name.toLowerCase()}`;
                const C = route.render;
                var newRoute = {
                  ...route,
                  render: () => <C data={props[dataKey]} />
                };
              }
              const finalRoute = newRoute || route;
              const isRoute = !route.to;
              // prettier-ignore
              return isRoute
                ? <Route key={name} {...finalRoute} />
                : <Redirect key={name} {...finalRoute}/>
            })}
          </Switch>
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
