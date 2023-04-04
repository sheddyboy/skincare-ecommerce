import React from "react";
import CTA from "./CTA/CTA";
import ExploreBlogs from "./ExploreBlogs/ExploreBlogs";
import FeaturedTreatment from "./FeaturedTreatment/FeaturedTreatment";
import styles from "./Home.module.scss";
import MissionValues from "./MissionValues/MissionValues";
import OurShop from "./OurShop/OurShop";

const Home = () => {
  return (
    <>
      <section className={styles.home}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.hero}>
              <h1>
                The essence of health <span>&</span> vitality in one place.
              </h1>
              <img src="/images/heroImg.png" alt="" width={600} />
            </div>
            <div className={styles.scroll}>
              <p>scroll</p>
              <img src="/images/down-arrow.png" alt="" height={20} />
            </div>
          </div>
        </div>
      </section>
      <MissionValues />
      <FeaturedTreatment />
      <CTA />
      <OurShop />
      <ExploreBlogs filter={true} blogPage={false} />
    </>
  );
};

export default Home;
