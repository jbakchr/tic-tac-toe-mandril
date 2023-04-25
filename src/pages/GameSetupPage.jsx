import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";
import { Arrow } from "../components/common/Arrow";
import { AvatarImage } from "../components/game/AvatarImage";

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
          <AvatarImage avatarImgText="Spiller 1" />
          <Arrow />
          <AvatarImage avatarImgText="Spiller 2" />
        </div>
      </div>
    </MainLayout>
  );
};
