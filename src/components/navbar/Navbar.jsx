import React from "react";

export const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#0098c7",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontFamily: "Lobster Two",
          color: "white",
          textShadow: "2px 2px black",
        }}
      >
        Kryds og bol.. Mandril!
      </h1>
    </div>
  );
};
