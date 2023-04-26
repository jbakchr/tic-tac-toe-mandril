import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playersTurn, setPlayersTurn] = useState(0);

  const addPlayer = (player) => {
    setPlayers((prev) => [...prev, player]);
  };

  return (
    <GlobalContext.Provider value={{ players, playersTurn, addPlayer }}>
      {children}
    </GlobalContext.Provider>
  );
};
