import { motion } from "framer-motion";
import React from "react";
import styles from "./Shimmer.module.scss";

const Shimmer = () => {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{
        transform: ["translateX(-150%)", "translateX(60%)", "translateX(150%)"],
        transition: { duration: 1.5, repeat: Infinity },
      }}
    >
      <div className={styles.shimmer}></div>
    </motion.div>
  );
};

export default Shimmer;
