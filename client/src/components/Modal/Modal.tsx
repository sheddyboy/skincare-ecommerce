import { motion, Variant } from "framer-motion";
import React from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ toggleModal, children }: ModalProps) => {
  const variants: { from: Variant; to: Variant; exit: Variant } = {
    from: { opacity: "0%" },
    to: {
      opacity: "100%",
      transition: { duration: 0.1 },
    },
    exit: { opacity: "0%" },
  };
  return (
    <motion.div
      className={styles.section}
      variants={variants}
      initial="from"
      animate="to"
      exit="exit"
    >
      <div className={styles.modalOverlay} onClick={toggleModal}></div>
      {children}
    </motion.div>
  );
};

export default Modal;
