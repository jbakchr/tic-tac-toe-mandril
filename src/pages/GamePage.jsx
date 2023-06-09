import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../components/layout/MainContent";
import { Container } from "@mui/material";
import { GameBoard } from "../components/game/GameBoard";

export const GamePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <Container maxWidth="xs">
          <GameBoard />
          <p>A header such "Hvis tur er det .. ?" here</p>
          <p>New game button here</p>
        </Container>
      </MainContent>
    </MainLayout>
  );
};
