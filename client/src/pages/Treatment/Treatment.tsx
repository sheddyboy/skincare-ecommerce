import Button from "components/Button/Button";
import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./Treatment.module.scss";
import { useGetSingleTreatmentQuery } from "features/Treatment/treatmentApi";

const Treatment = () => {
  const { slug } = useParams();
  const { data: treatment } = useGetSingleTreatmentQuery(slug!);
  const pricesRef = useRef<HTMLDivElement>(null);
  const scrollToPrices = () => {
    window.scrollTo({ top: pricesRef.current?.offsetTop, behavior: "smooth" });
  };
  return (
    <div className={styles.treatment}>
      <span className={styles.heading}>{treatment?.title}</span>
      <p className={styles.title}>{treatment?.desc}</p>
      <div className={styles.reservation}>
        <Button title="MAKE A RESERVATION" link="/contact" />
        <div onClick={scrollToPrices} className={styles.explore}>
          <p>EXPLORE PRICING</p>
          <div className={styles.line}></div>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={treatment?.imageUrl} alt="" />
      </div>
      <div className={styles.prices} id="prices" ref={pricesRef}>
        {treatment?.details?.map((detail) => (
          <div className={styles.price} key={detail._id}>
            <div className={styles.left}>
              <span>{detail.title}</span>
              <p>{detail.desc}</p>
            </div>
            <div className={styles.right}>
              <p>{`$${detail.price}`}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.about}>
        <h1>About the service</h1>
        <p className={styles.desc}>
          Sit amet massa vitae tortor condimentum lacinia. Donec et odio
          pellentesque diam volutpat commodo sed. Eu turpis egestas pretium
          aenean. Aliquam faucibus purus in massa tempor nec feugiat nisl. Eu
          scelerisque felis imperdiet proin fermentum leo vel orci. Nunc
          pulvinar sapien et ligula. Eget arcu dictum varius duis at consectetur
          lorem. A cras semper auctor neque vitae tempus quam. Malesuada proin
          libero nunc consequat.
        </p>
        <div className={styles.aboutImage}>
          <img src="/images/treatmentImage.jpg" alt="" />
        </div>
        <h2>What’s included in the service?</h2>
        <p className={styles.includesDesc}>
          Sit amet massa vitae tortor condimentum lacinia. Donec et diam
          volutpat commodo sed. Eu turpis egestas pretium aenean. Aliquam
          faucibus purus in massa tempor nec feugiat nisl. Eu scelerisque felis
          imperdiet proin fermentum leo vel orci. Nunc pulvinar sapien et
          ligula. Eget arcu dictum varius duis at
        </p>
        <ul>
          <li>
            Services are personalized to meet the specific needs of each client,
            ensuring the most effective and enjoyable experience.
          </li>
          <li>
            The spa uses premium, hand-selected products to enhance the
            effectiveness of each treatment and provide maximum benefits to
            clients.
          </li>
          <li>
            All services are performed by trained and experienced professionals
            who are dedicated to delivering the highest level of customer
            satisfaction.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Treatment;
