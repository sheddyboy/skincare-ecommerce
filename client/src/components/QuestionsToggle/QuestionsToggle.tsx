import { motion, Variants } from "framer-motion";
import React, { useState } from "react";
import styles from "./QuestionsToggle.module.scss";

interface QuestionsToggleProps {
  children: React.ReactNode;
  title: string;
}

const QuestionsToggle = ({ children, title }: QuestionsToggleProps) => {
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
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div className={styles.wrapper} variants={childVariants}>
      <div className={styles.top}>
        <p>{title}</p>
        <div
          className={styles.imgWrapper}
          onClick={() => setToggle((prev) => !prev)}
        >
          <motion.img
            src="/images/add.png"
            alt=""
            animate={{ rotateZ: toggle ? 45 : 0 }}
          />
        </div>
      </div>
      <motion.div
        className={styles.bottom}
        initial={{ height: "0px" }}
        animate={{ height: toggle ? "auto" : "0px" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default QuestionsToggle;
