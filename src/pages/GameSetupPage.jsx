import { Container } from "@mui/material";

import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";
import { Arrow } from "../components/common/Arrow";
import { AvatarImage } from "../components/game/AvatarImage";
import { MainContent } from "../components/layout/MainContent";
import { AvatarSelectionSection } from "../components/game/AvatarSelectionSection";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <Container maxWidth="xs">
          <GameSetupHeader />
          <Divider />
          <AvatarSelectionSection>
            <AvatarImage avatarImgText="Spiller 1" />
            <Arrow />
            <AvatarImage avatarImgText="Spiller 2" />
          </AvatarSelectionSection>
        </Container>
      </MainContent>
    </MainLayout>
  );
};
