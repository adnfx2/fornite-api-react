import { useState, useEffect } from "react";

const useViewportWidth = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const handleViewportResize = () => {
    setViewportWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleViewportResize);
    return () => {
      window.removeEventListener("resize", handleViewportResize);
    };
  }, []);

  return viewportWidth;
};

export default useViewportWidth;
