import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./MissionValues.module.scss";
import Points from "components/Points/Points";

const MissionValues = () => {
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
          <Points />
        </div>
      </div>
    </section>
  );
};

export default MissionValues;
