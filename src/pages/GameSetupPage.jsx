import React from "react";
import { MainLayout } from "../components/MainLayout";
import { Navbar } from "../components/navbar/Navbar";

export const GameSetupPage = () => {
  return (
    <MainLayout>
      <Navbar />
      <p style={{ flexGrow: 1 }}>game setup</p>
    </MainLayout>
  );
};
