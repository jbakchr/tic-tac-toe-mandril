import { useContext } from "react";
import { Container } from "@mui/material";

import { GlobalContext } from "../context/GlobalContext";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../components/layout/MainContent";
import { GameSetupHeader } from "../components/game/GameSetupHeader";
import { Divider } from "../components/common/Divider";
import { AvatarSelectionSection } from "../components/game/AvatarSelectionSection";
import { AvatarImagePlaceholder } from "../components/game/AvatarImagePlaceholder";
import { Arrow } from "../components/common/Arrow";
import { AvatarImageListSection } from "../components/game/AvatarImageListSection";
import { GameSetupSubHeader } from "../components/game/GameSetupSubHeader";
import { AvatarImageList } from "../components/game/AvatarImageList";
import { GameStartButton } from "../components/buttons/GameStartButton";

export const GameSetupPage = () => {
  const { players } = useContext(GlobalContext);

  const renderArrow = () => {
    if (players.length === 2) {
      return;
    }

    return <Arrow />;
  };

  const renderGameStartButton = () => {
    if (players.length !== 2) {
      return null;
    }

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GameStartButton to="/game" timeDelay={0.5} buttonText="Start" />
      </div>
    );
  };

  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <Container maxWidth="xs">
          <GameSetupHeader />
          <Divider />
          <AvatarSelectionSection>
            <AvatarImagePlaceholder avatarImgText="Spiller 1" />
            {renderArrow()}
            <AvatarImagePlaceholder avatarImgText="Spiller 2" />
          </AvatarSelectionSection>
          <AvatarImageListSection>
            <GameSetupSubHeader />
            <AvatarImageList />
          </AvatarImageListSection>
          {renderGameStartButton()}
        </Container>
      </MainContent>
    </MainLayout>
  );
};
