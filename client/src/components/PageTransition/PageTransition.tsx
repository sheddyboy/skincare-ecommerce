import { motion, Variant } from "framer-motion";
import React from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: React.ReactNode;
}

const pageVariants: { from: Variant; to: Variant } = {
  from: {
    opacity: "0%",
  },
  to: {
    opacity: "100%",
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      initial="from"
      animate="to"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
