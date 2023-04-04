import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import styles from "./Community.module.scss";

const Community = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const y = useTransform(springY, [0, 1], ["100%", "0%"]);
  const yAlt = useTransform(springY, [0, 1], ["-100%", "0%"]);
  return (
    <motion.div ref={sectionRef} className={styles.section}>
      <div className={styles.wrapper}>
        <motion.div className={styles.left} style={{ y: y, top: "-100%" }}>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da604a8bd69457d2b9a2c5_instra-2-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da615f359b4b6862d40205_instra-5-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da604bb2d377b6c16a2859_instra-1-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da604a8bd69457d2b9a2c5_instra-2-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da615f359b4b6862d40205_instra-5-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.leftImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da604bb2d377b6c16a2859_instra-1-p-500.jpg"
              alt=""
            />
          </div>
        </motion.div>
        <div className={styles.middle}>
          <h5 className={styles.follow}>FOLLOW ON INSTAGRAM</h5>
          <p>
            Join our community <span>@Ritual</span>
          </p>
        </div>
        <motion.div
          className={styles.right}
          style={{ y: yAlt, bottom: "-100%" }}
        >
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da6160cab4e8c3f4cf017e_instra-4-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da61f5762dcc8fd202194f_instra-6-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da616057b602c8979a40f4_instra-3-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da6160cab4e8c3f4cf017e_instra-4-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da61f5762dcc8fd202194f_instra-6-p-500.jpg"
              alt=""
            />
          </div>
          <div className={styles.rightImage}>
            <img
              src="https://assets.website-files.com/63d901fad2b94bfd6afd0c22/63da616057b602c8979a40f4_instra-3-p-500.jpg"
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Community;
