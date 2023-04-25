import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { GameSetupHeader } from "../components/game/GameSetupHeader";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <GameSetupHeader />
      </div>
    </MainLayout>
  );
};
