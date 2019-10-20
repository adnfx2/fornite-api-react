import { useEffect } from "react";

export default (handler, shouldListen) => {
  useEffect(() => {
    document.addEventListener("mousedown", handler, { once: true });
    return () =>
      document.removeEventListener("mousedown", handler, { once: true });
  });
};
