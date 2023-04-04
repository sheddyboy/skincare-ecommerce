import { motion, Variants } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MissionValues.module.scss";

const MissionValues = () => {
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
    <section className={styles.missionValues}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div
            className={styles.top}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <h2>MISSION AND VALUES</h2>
            <p>
              A wellness destination for holistic spa services, self-care
              products, and intentional practices to elevate your overall
              wellbeing.
            </p>
            <Link to="/about">More About Ritual</Link>
          </motion.div>
          <motion.div
            className={styles.bottom}
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
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
