import React from "react";

export const AvatarSelectionSection = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "175px",
      }}
    >
      {children}
    </div>
  );
};
