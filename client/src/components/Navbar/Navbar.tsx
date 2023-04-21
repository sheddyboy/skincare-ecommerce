import { useAppSelector } from "app/hooks";
import CartModal from "components/Modal/CartModal/CartModal";
import ModalPortal from "components/ModalPortal/ModalPortal";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import useModal from "hooks/useModal";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [hamMenuToggle, setHamMenuToggle] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("up");
  useMotionValueEvent(scrollYProgress, "change", (scrollValue) => {
    scrollValue > scrollYProgress.getPrevious()
      ? setDirection("down")
      : setDirection("up");
  });

  const { isOpen, toggleModal } = useModal();

  const { cartItems } = useAppSelector((state) => state.cartSlice);
  return (
    <>
      <motion.nav
        className={styles.navbar}
        initial={{ y: "0%" }}
        animate={{ y: direction === "up" ? "0%" : "-100%" }}
      >
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.left}>
              <Link to="/" className={styles.logo}>
                <img src="/images/logo.png" alt="" width={80} />
              </Link>
            </div>
            <div className={styles.middle}>
              <Link to="/about" className={styles.link}>
                ABOUT
              </Link>
              <Link to="/treatments" className={styles.link}>
                TREATMENT
              </Link>
              <Link to="/shop" className={styles.link}>
                SHOP
              </Link>
              <Link to="/blog" className={styles.link}>
                BLOG
              </Link>
            </div>
            <div className={styles.right}>
              <Link to="/contact" className={styles.contact}>
                BOOK NOW
              </Link>
              <div className={styles.cart} onClick={toggleModal}>
                <img src="/images/cart.svg" alt="" width={22} />
                <span>{cartItems.length}</span>
              </div>
              <div
                className={styles.hamMenu}
                onClick={() => setHamMenuToggle((prev) => !prev)}
              >
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <AnimatePresence>
              {hamMenuToggle && (
                <motion.div
                  className={styles.hamMenuItems}
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{
                    y: direction === "up" ? "0%" : "-100%",
                    opacity: 1,
                  }}
                  exit={{
                    y: "-100%",
                    opacity: 0,
                  }}
                >
                  <Link to="/about" className={styles.link}>
                    ABOUT
                  </Link>
                  <Link to="/treatments" className={styles.link}>
                    TREATMENT
                  </Link>
                  <Link to="/shop" className={styles.link}>
                    SHOP
                  </Link>
                  <Link to="/blog" className={styles.link}>
                    BLOG
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isOpen && (
          <ModalPortal toggleModal={toggleModal}>
            <CartModal />
          </ModalPortal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
