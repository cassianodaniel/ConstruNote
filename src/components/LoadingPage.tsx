import React from "react";
import logo from "./../assets/images/emblems/logo.png";
import { motion } from "framer-motion";

const LoadingPage: React.FC = () => {
  return (
    <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
      <motion.img
        src={logo}
        alt="logo"
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 0, 0, 0, 0],
          x: [0, 0, 0, 0, 0],
          opacity: [1, 1, 1, 1, 0],
          scale: [1, 2, 2, 1, 3],
          rotate: [0, 360, 405, 0, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{ width: 140, height: 90 }}
      />
    </div>
  );
};

export default LoadingPage;
