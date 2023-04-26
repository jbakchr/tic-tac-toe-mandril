import React from "react";

export const ImagePlaceholder = ({ imgStyle, avatarImgText }) => {
  return (
    <div
      style={{
        ...imgStyle,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>{avatarImgText}</p>
    </div>
  );
};
