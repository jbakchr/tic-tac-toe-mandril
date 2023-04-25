import React from "react";

export const Arrow = () => {
  return (
    <picture>
      <img
        src={`/images/arrow.webp`}
        alt="arrow"
        style={{ width: "50px", height: "50px", transform: "scaleX(-1)" }}
      />
    </picture>
  );
};
