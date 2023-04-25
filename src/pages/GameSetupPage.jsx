import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <GameSetupHeader />
        <Divider />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>Player One 1 here</p>
          <picture>
            <img
              src={`/images/arrow.webp`}
              alt="arrow"
              style={{ width: "50px", height: "50px", transform: "scaleX(-1)" }}
            />
          </picture>
          <p>Player Two here</p>
        </div>
      </div>
    </MainLayout>
  );
};
