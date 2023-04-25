import React from "react";

export const AvatarImage = ({ avatarImgText }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "125px",
        height: "125px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
      }}
    >
      <p>{avatarImgText}</p>
    </div>
  );
};