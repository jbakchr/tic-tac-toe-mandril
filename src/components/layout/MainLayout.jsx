import React from "react";

export const MainLayout = ({ children, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        ...styles,
      }}
    >
      {children}
    </div>
  );
};
