import { createContext, useContext, useEffect, useState } from "react";

type Breakpoint = "big" | "small";

export const useBreakpoint = () => {
  const [width, setWidth] = useState<Breakpoint>("big");
  useEffect(() => {
    const getSize = () => {
      if (window.innerWidth <= 1024) {
        setWidth("small");
      } else {
        setWidth("big");
      }
    };
    getSize();
    window.addEventListener("resize", getSize);
    return () => window.removeEventListener("resize", getSize);
  }, []);

  return width;
};

const BreakpointContext = createContext<Breakpoint>("big");
export const BreakpointContextProvider = BreakpointContext.Provider;
export const useBreakpointContext = () => useContext(BreakpointContext);
