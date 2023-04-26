import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { MainLayout } from "../components/layout/MainLayout";
import { GameStartButton } from "../components/buttons/GameStartButton";

const mainStyle = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0098c7",
};

const contentStyle = {
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
};

const headerStyle = {
  color: "white",
  fontStyle: "italic",
  fontFamily: "Lobster Two",
  textShadow: "2px 2px black",
  fontSize: "35px",
  textAlign: "center",
};

export const HomePage = () => {
  return (
    <MainLayout styles={mainStyle}>
      <div style={contentStyle}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.0 }}
          style={headerStyle}
        >
          Kryds og bol.. Mandril!
        </motion.h1>
        <GameStartButton to="/game-setup" buttonText="Start spillet" />
      </div>
    </MainLayout>
  );
};
