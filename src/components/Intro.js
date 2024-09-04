import React from "react";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile-img.png";

const Intro = () => {
  return (
    <motion.div
      className="box"
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <div className="sub-box">
        <div className="text">
          <h1>Hi,</h1>
          <h3>I'm Jitendra.</h3>
          <h6>
            As a software engineer, I design and develop innovative solutions
            that enhance efficiency and user experiences, utilizing modern
            technologies and best practices.
          </h6>
        </div>
      </div>
      <div className="sub-box">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;
