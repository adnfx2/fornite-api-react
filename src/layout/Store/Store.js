import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createUseStyles } from "react-jss";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import FilterMenu from "../../containers/FilterMenu/FilterMenu";
import FilterButton from "../../components/FilterButton/FilterButton";
import ResponsiveFilterOptions from "./components/ResponsiveFilterOptions";
import {
  fetchWeapons,
  fetchItems,
  addToStarreds,
  removeFromStarreds
} from "../../redux/actions/actions";
import { ENDPOINT_WEAPONS, ENDPOINT_ITEMS } from "../../utils/api/api";
import { storeLinks, storeRoutes } from "../../routes/routes";
import renderGameItems from "./components/renderGameItems";
import renderGameWeapons from "./components/renderGameWeapons";
import fortniteBanner from "../../assets/images/Fortnite-Banner.jpg";
import ListItems from "./components/ListItems";

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
  }, []); //eslint-disable-line
};

const useFilterToggle = () => {
  const [visible, setVisible] = useState(false);
  const filterToggleHandler = () => setVisible(prevVisible => !prevVisible);
  return [visible, filterToggleHandler];
};

const Store = props => {
  const {
    weapons,
    fetchWeapons,
    weaponsErrorMsg,
    items,
    fetchItems,
    itemsErrorMsg,
    starredCards,
    addToStarreds,
    removeFromStarreds
  } = props;
  useShouldFetch(weapons, fetchWeapons);
  useShouldFetch(items, fetchItems);
  const [visible, filterToggleHandler] = useFilterToggle();
  const classes = useStyle();
  const starredsHandler = { addToStarreds, removeFromStarreds };
  const listsConfigs = {
    items: {
      sourceData: { ...items, starredCards },
      renderItems: renderGameItems,
      error: itemsErrorMsg,
      reloadHandler: () => fetchItems()
    },
    weapons: {
      sourceData: { ...weapons, starredCards },
      renderItems: renderGameWeapons,
      error: weaponsErrorMsg,
      reloadHandler: () => fetchWeapons()
    }
  };
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
          <FilterButton onClick={filterToggleHandler} />
        </Col>
      </Row>
      <Row>
        <Col className="pt-3">
          <Switch>
            {storeRoutes.map(({ name, ...route }) => {
              const isRoute = !route.to;
              const dataKey = `${name.toLowerCase()}`;
              // prettier-ignore
              return isRoute
                ? <Route
                  {...route}
                  key={name}
                  render={routeProps =>
                    <ListItems {...routeProps} {...listsConfigs[dataKey]} starredsHandler={starredsHandler}/>
                  }/>
                : <Redirect key={name} {...route}/>
            })}
          </Switch>
        </Col>
        <ResponsiveFilterOptions
          filterToggleHandler={filterToggleHandler}
          visible={visible}
        >
          <FilterMenu
            rarities={items && items.itemsByRarity}
            types={items && items.itemsByType}
          />
        </ResponsiveFilterOptions>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ dataFetched, errors, starredCards }) => {
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
    starredCards
  };
};

const mapDispatchToProps = {
  fetchWeapons,
  fetchItems,
  addToStarreds,
  removeFromStarreds
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);
