import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            <div className={styles.left}>
              <h4>TREATMENTS</h4>
              <div className={styles.links}>
                <Link to="/">Facial</Link>
                <Link to="/">Message</Link>
                <Link to="/">Body Wrap</Link>
                <Link to="/">Manicure & Pedicure</Link>
                <Link to="/">Aromatherapy</Link>
              </div>
            </div>
            <div className={styles.middle}>
              <div className={styles.middleTop}>
                <h4>OPENING HOURS</h4>
                <p>We are open 7 days a week, from 9:00 AM to 9:00 PM.</p>
              </div>
              <div className={styles.middleBottom}>
                <h4>CONTACT</h4>
                <p>book@ritual.com</p>
                <p>+1 446 341 226</p>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h4>LOCATION</h4>
                <p>45 W 34th St, New York, NY 10001</p>
              </div>
              <div className={styles.rightBottom}>
                <h4>SOCIAL MEDIA</h4>
                <div className={styles.socialLinks}>
                  <Link to="/">
                    <img src="/images/instagram.png" alt="" width={17} />
                  </Link>
                  <Link to="/">
                    <img src="/images/twitter.png" alt="" width={17} />
                  </Link>
                  <Link to="/">
                    <img src="/images/linkedin.png" alt="" width={17} />
                  </Link>
                  <Link to="/">
                    <img src="/images/dribble.png" alt="" width={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.left}>© This is a Masterpiece</div>
            <div className={styles.middle}>
              <img src="/images/logo.png" alt="" width={80} />
            </div>
            <div className={styles.right}>
              <div className={styles.rightLeft}>
                <p>STYLE GUIDE</p>
                <div className={styles.line}></div>
              </div>
              <div className={styles.rightRight}>
                <p>LICENSING</p>
                <div className={styles.line}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
