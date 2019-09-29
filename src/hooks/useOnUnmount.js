import { useEffect } from "react";

const useOnUnmount = (...funcs) => {
  funcs.forEach(func => {
    if (typeof func !== "function") {
      throw new Error(
        `Invalid argument, useOnUnmount only allows functions as it's arguments`
      );
    }
  });
  useEffect(() => {
    return () => funcs.forEach(func => func());
  }, []); //eslint-disable-line
};

export default useOnUnmount;
