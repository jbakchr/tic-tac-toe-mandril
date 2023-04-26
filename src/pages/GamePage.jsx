import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Navbar } from "../components/navbar/Navbar";
import { MainContent } from "../components/layout/MainContent";
import { Container } from "@mui/material";

export const GamePage = () => {
  return (
    <MainLayout>
      <Navbar />
      <MainContent>
        <Container maxWidth="xs">
          <p>content here</p>
        </Container>
      </MainContent>
    </MainLayout>
  );
};
