import React from "react";
import { Link } from "react-router-dom";
import styles from "./CTA.module.scss";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <img src="/images/quote.png" alt="" width={100} />
            <p>
              "Take time to nurture your mind, body, and soul at our tranquil
              haven."
            </p>
          </div>
          <div className={styles.bottom}>
            <p>Sophia Rose, Ritual Founder</p>
            <Link to="/contact">Reserve Your Experience</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
