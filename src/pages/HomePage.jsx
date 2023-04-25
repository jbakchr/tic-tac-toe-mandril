import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { MainLayout } from "../components/MainLayout";

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

const btnStyle = {
  backgroundColor: "#ffd32a",
  color: "#01a75b",
  fontFamily: "Lobster Two",
  padding: "10px 50px",
  borderRadius: "50%",
  fontSize: "20px",
  boxShadow: "3px 3px black",
  fontWeight: "bolder",
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
        <Link to="/game-setup">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
            style={btnStyle}
          >
            Start spillet
          </motion.button>
        </Link>
      </div>
    </MainLayout>
  );
};
