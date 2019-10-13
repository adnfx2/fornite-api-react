/*
  # useControlledComponent.js

  This hook makes a form-like component "controlled" by providing a local state which is updated only via setState or whenever it recieves an a brand new externalState.
*/

import { useState, useEffect } from "react";

const useControlledComponent = externalState => {
  const [state, setState] = useState(externalState);
  useEffect(() => {
    if (externalState !== state) setState(externalState);
  }, [externalState]); //  eslint-disable-line

  return [state, setState];
};

export default useControlledComponent;
