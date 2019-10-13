import React from "react";
import { createUseStyles } from "react-jss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import useControlledComponent from "../../hooks/useControlledComponent";

const useSearchStyle = createUseStyles({
  search: {
    position: "relative"
  },
  input: {
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #f4f4f4",
    height: "2.5rem",
    fontSize: ".875rem",
    padding: "0 .25rem 0 2.5rem",
    marginBotton: ".5rem",
    [`&:focus`]: {
      outline: "none",
      borderColor: "#555",
      boxShadow: "0 0 0 1px #555"
    }
  },
  icon: {
    position: "absolute",
    display: "inline-block",
    textAlign: "center",
    top: "1px",
    lineHeight: "2.5rem",
    left: "1rem",
    color: "#555"
  }
});

const Search = ({
  size = 15,
  compId,
  placeholder = "Search...",
  externalState = "",
  actionHandler,
  ...props
}) => {
  const styles = useSearchStyle();
  const [innerValue, setInnerValue] = useControlledComponent("");
  const onChangeHandler = e => {
    const value = e.target.value;
    setInnerValue(value);
    !value && actionHandler({ compId, value });
  };
  const onKeyPressHandler = e =>
    e.key === "Enter" &&
    innerValue !== externalState &&
    actionHandler({ compId, innerValue });

  return (
    <div className={styles.search}>
      <span className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        size={size}
        className={styles.input}
        type="text"
        placeholder={placeholder}
        value={innerValue}
      />
    </div>
  );
};

export default Search;
