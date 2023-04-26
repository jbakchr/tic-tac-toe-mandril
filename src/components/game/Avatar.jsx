import React from "react";

export const Avatar = ({ img }) => {
  return (
    <img
      src={`/images/${img.url}`}
      alt={img.altText}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "4px",
      }}
    />
  );
};
