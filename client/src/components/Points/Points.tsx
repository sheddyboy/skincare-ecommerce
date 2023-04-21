import React from "react";
import styles from "./Points.module.scss";
import { motion, Variants } from "framer-motion";

const Points = () => {
  const parentVariants: Variants = {
    initial: {
      opacity: 0,
    },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const childVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className={styles.points}
      variants={parentVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className={styles.item} variants={childVariants}>
        <img src="/images/spa.png" alt="" width={60} />
        <p>Providing exceptional spa experiences</p>
      </motion.div>
      <motion.div className={styles.item} variants={childVariants}>
        <img src="/images/natural.png" alt="" width={60} />
        <p>Using natural, sustainable, and locally-sourced products</p>
      </motion.div>
      <motion.div className={styles.item} variants={childVariants}>
        <img src="/images/self-care.png" alt="" width={60} />
        <p>Empowering customers to prioritize self-care</p>
      </motion.div>
      <motion.div className={styles.item} variants={childVariants}>
        <img src="/images/community.png" alt="" width={60} />
        <p>Fostering a supportive and inclusive community</p>
      </motion.div>
    </motion.div>
  );
};

export default Points;
