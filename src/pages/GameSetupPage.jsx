import { Container } from "@mui/material";

import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../components/layout/MainContent";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";
import { AvatarSelectionSection } from "../components/game/AvatarSelectionSection";
import { AvatarImage } from "../components/game/AvatarImage";
import { Arrow } from "../components/common/Arrow";
import { AvatarImageListSection } from "../components/game/AvatarImageListSection";
import { GameSetupSubHeader } from "../components/game/GameSetupSubHeader";

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
          <AvatarImageListSection>
            <GameSetupSubHeader />
            <p>image list</p>
          </AvatarImageListSection>
        </Container>
      </MainContent>
    </MainLayout>
  );
};
