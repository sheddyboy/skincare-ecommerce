import Button from "components/Button/Button";
import { motion, Variants } from "framer-motion";
import React from "react";
import styles from "./About.module.scss";
import Points from "components/Points/Points";

const About = () => {
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
    <div className={styles.about}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.hero}>
            <div className={styles.left}>
              <span>MISSION AND VALUES</span>
              <p>
                Welcome to our wellness destination for mind, body and soul. We
                offer holistic spa services, self-care products and intentional
                practices. <br />
                <br />
                Find relaxation with a massage or rejuvenation with a facial.
                Indulge in premium skincare and aromatherapy products.
                <br />
                <br /> Join us on a journey to your best self through
                intentional self-care.
              </p>
            </div>
            <div className={styles.right}>
              <img src="/images/aboutHero.jpg" alt="" />
            </div>
            <div className={styles.scroll}>
              <p>scroll</p>
              <motion.img
                src="/images/down-arrow.png"
                alt=""
                height={20}
                animate={{
                  y: [0, 10, 0],
                  transition: { repeat: Infinity, duration: 1 },
                }}
              />
            </div>
          </div>
          <Points />
          <div className={styles.team}>
            <motion.div
              className={styles.titleWrapper}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.8, once: true }}
            >
              <span className={styles.heading}>Meet The Team</span>
              <p className={styles.title}>
                At Ritual, our team is dedicated to providing you with the
                ultimate spa experience.
              </p>
              <Button
                mt="30px"
                link="/contact"
                title="Join The Ritual Family"
              />
            </motion.div>
            <motion.div
              className={styles.members}
              variants={parentVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ amount: 0.3, once: true }}
            >
              <motion.div className={styles.member} variants={childVariants}>
                <img src="/images/member-1.jpg" alt="" />
                <span>SOPHIA ROSE, SPA DIRECTOR</span>
                <p>
                  With 10 years of experience in the industry, Sophia has a deep
                  passion for helping people feel their best.
                </p>
              </motion.div>
              <motion.div className={styles.member} variants={childVariants}>
                <img src="/images/member-2.jpg" alt="" />
                <span>MARIA DOE, LEAD THERAPIST</span>
                <p>
                  Maria is a highly skilled massage therapist who is dedicated
                  to helping clients find relief from stress and pain.
                </p>
              </motion.div>
              <motion.div className={styles.member} variants={childVariants}>
                <img src="/images/member-3.jpg" alt="" />
                <span>BIACA GREEN, LEAD ESTHETICIAN</span>
                <p>
                  Biaca is a master of skincare, with [number] years of
                  experience in the industry.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
