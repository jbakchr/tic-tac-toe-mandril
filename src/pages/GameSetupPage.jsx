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
      </div>
    </MainLayout>
  );
};
