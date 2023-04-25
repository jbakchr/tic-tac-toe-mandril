import { motion } from "framer-motion";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
        backgroundColor: "#0098c7",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.0 }}
        style={{
          color: "white",
          fontStyle: "italic",
          fontFamily: "Lobster Two",
          textShadow: "2px 2px black",
        }}
      >
        Kryds og bol... Mandril!
      </motion.h1>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0 }}
      >
        Start spillet
      </motion.button>
    </div>
  );
};
