import React, { useEffect } from "react";
import { fetchWeapons, fetchItems } from "../../redux/actions/actions";
import { ENDPOINT_WEAPONS, ENDPOINT_ITEMS } from "../../utils/api/api";
import { connect } from "react-redux";

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
  console.log({ weapons, items });
  return (
    <div>
      Hello{" "}
      {weapons
        ? weapons.result.map(weapon => <p key={weapon}>{weapon}</p>)
        : "loading..."}
    </div>
  );
};

const mapStateToProps = ({ dataFetched, errors }) => {
  const array = [ENDPOINT_WEAPONS, ENDPOINT_ITEMS];
  const [weapons, items] = array.map(el => {
    const key = el.split("/")[0];
    return { data: dataFetched[key], error: errors.apiErrors[key] };
  });
  console.log({ weapons, items });
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
