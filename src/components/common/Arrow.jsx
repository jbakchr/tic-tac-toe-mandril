import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalContext";

export const Arrow = () => {
  const { playersTurn } = useContext(GlobalContext);

  // const transformScale = "scaleX(-1)";
  const transformScale = playersTurn === 0 ? "scaleX(-1)" : "scaleX(1)";

  return (
    <picture>
      <img
        src={`/images/arrow.webp`}
        alt="arrow"
        style={{ width: "50px", height: "50px", transform: transformScale }}
      />
    </picture>
  );
};
