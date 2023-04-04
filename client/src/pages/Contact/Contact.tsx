import QuestionsToggle from "components/QuestionsToggle/QuestionsToggle";
import { motion, Variants } from "framer-motion";
import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
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
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.fromSection}>
          <div className={styles.left}>
            <span className={styles.heading}>BOOK AN APPOINTMENT</span>
            <p className={styles.title}>
              Whether you have a question, would like to book an appointment, or
              simply want to share your thoughts with us, please don't hesitate
              to get in touch
            </p>
            <span className={styles.openingHours}>OPENING HOURS</span>
            <p className={styles.openDetails}>
              We are open 7 days a week, from 9:00 AM to 9:00 PM.
            </p>
            <span className={styles.contacts}>CONTACT</span>
            <p className={styles.email}>book@ritual.com</p>
            <p className={styles.number}>+1 446 341 226</p>
          </div>
          <form className={styles.right}>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Name*</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Email Address*</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Phone Number*</label>
              <input type="tel" placeholder="(123) 456-789" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Treatment*</label>
              <input type="text" placeholder="Ex. Facial" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Date & Time*</label>
              <input type="date" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Number of People*</label>
              <input type="number" min={0} placeholder="0+" />
            </div>
            <div className={styles.inputWrapper}>
              <label htmlFor="">Special Requests</label>
              <textarea placeholder="Any special requests or requirements for the appointment" />
            </div>

            <input type="submit" value="MAKE A RESERVATION" />
          </form>
        </div>
        <div className={styles.faq}>
          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 1, once: true }}
          >
            <span className={styles.heading}>FAQ</span>
            <p className={styles.title}>
              Get answers to common questions about our spa services and
              policies with our comprehensive FAQ page.
            </p>
          </motion.div>
          <motion.div
            className={styles.questions}
            variants={parentVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ amount: 0.8, once: true }}
          >
            <QuestionsToggle title="What services does the spa offer?">
              <div className={styles.desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  fuga animi mollitia, voluptates fugit asperiores beatae
                  soluta, ratione odit nobis natus sit voluptatibus cum eum
                  error reiciendis quo nemo pariatur!
                </p>
              </div>
            </QuestionsToggle>
            <QuestionsToggle title="Are appointments required for services?">
              <div className={styles.desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  fuga animi mollitia, voluptates fugit asperiores beatae
                  soluta, ratione odit nobis natus sit voluptatibus cum eum
                  error reiciendis quo nemo pariatur!
                </p>
              </div>
            </QuestionsToggle>
            <QuestionsToggle title="What is the cancellation policy?">
              <div className={styles.desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  fuga animi mollitia, voluptates fugit asperiores beatae
                  soluta, ratione odit nobis natus sit voluptatibus cum eum
                  error reiciendis quo nemo pariatur!
                </p>
              </div>
            </QuestionsToggle>
            <QuestionsToggle title="What should I wear to my appointment">
              <div className={styles.desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  fuga animi mollitia, voluptates fugit asperiores beatae
                  soluta, ratione odit nobis natus sit voluptatibus cum eum
                  error reiciendis quo nemo pariatur!
                </p>
              </div>
            </QuestionsToggle>
            <QuestionsToggle title="Does the spa offer any packages or special promotions?">
              <div className={styles.desc}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  fuga animi mollitia, voluptates fugit asperiores beatae
                  soluta, ratione odit nobis natus sit voluptatibus cum eum
                  error reiciendis quo nemo pariatur!
                </p>
              </div>
            </QuestionsToggle>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
