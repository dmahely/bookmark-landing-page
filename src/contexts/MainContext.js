import React, { createContext } from "react";

const MainContext = createContext({
  style: "normal",
  setStyle: () => {},
});

export { MainContext };
