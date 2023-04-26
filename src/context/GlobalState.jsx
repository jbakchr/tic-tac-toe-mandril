import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playersTurn, setPlayersTurn] = useState(0);

  return (
    <GlobalContext.Provider value={{ players, playersTurn }}>
      {children}
    </GlobalContext.Provider>
  );
};
