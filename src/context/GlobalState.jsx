import { useState } from "react";

import { GlobalContext } from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playersTurn, setPlayersTurn] = useState(0);

  const addPlayer = (player) => {
    /**
     * When the user has clicked an avatar then we first swap the "playerTurn"
     * and set that on state
     */
    const playerTurn = playersTurn === 0 ? 1 : 0;
    setPlayersTurn(playerTurn);

    /**
     * And then we update the list of players
     */
    setPlayers((prev) => [...prev, player]);
  };

  return (
    <GlobalContext.Provider value={{ players, playersTurn, addPlayer }}>
      {children}
    </GlobalContext.Provider>
  );
};
