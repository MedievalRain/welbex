import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const getSize = () => setWidth(window.innerWidth);
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);

  return width;
};
