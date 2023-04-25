import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/navbar/Navbar";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <h2
          style={{
            textAlign: "center",
            margin: "20px",
            fontFamily: "Lobster Two",
            color: "grey",
            fontSize: "30px",
            letterSpacing: "3px",
          }}
        >
          Vælg avatars
        </h2>
      </div>
    </MainLayout>
  );
};
