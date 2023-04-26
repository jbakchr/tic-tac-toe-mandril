import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [players, setPlayers] = useState([]);

  return (
    <GlobalContext.Provider value={{ players }}>
      {children}
    </GlobalContext.Provider>
  );
};
