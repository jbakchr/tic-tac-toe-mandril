import { Container } from "@mui/material";

import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";
import { Arrow } from "../components/common/Arrow";
import { AvatarImage } from "../components/game/AvatarImage";
import { MainContent } from "../components/layout/MainContent";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <Container maxWidth="xs">
          <GameSetupHeader />
          <Divider />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "175px",
            }}
          >
            <AvatarImage avatarImgText="Spiller 1" />
            <Arrow />
            <AvatarImage avatarImgText="Spiller 2" />
          </div>
        </Container>
      </MainContent>
    </MainLayout>
  );
};
