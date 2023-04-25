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
      <div
        style={{
          height: "150px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
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
            fontSize: "35px",
            textAlign: "center",
          }}
        >
          Kryds og bol.. Mandril!
        </motion.h1>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0 }}
          style={{
            backgroundColor: "#ffd32a",
            color: "#01a75b",
            fontFamily: "Lobster Two",
            padding: "10px 50px",
            borderRadius: "50%",
            fontSize: "20px",
            boxShadow: "3px 3px black",
            fontWeight: "bolder",
          }}
        >
          Start spillet
        </motion.button>
      </div>
    </div>
  );
};
