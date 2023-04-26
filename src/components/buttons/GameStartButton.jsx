import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

export const GameStartButton = ({ to, buttonText }) => {
  return (
    <Link to={to}>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        style={btnStyle}
      >
        {buttonText}
      </motion.button>
    </Link>
  );
};
