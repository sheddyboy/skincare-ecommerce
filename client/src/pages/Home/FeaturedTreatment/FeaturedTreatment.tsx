import React from "react";
import { Link } from "react-router-dom";
import { useGetTreatmentQuery } from "features/Treatment/treatmentApi";
import styles from "./FeaturedTreatment.module.scss";

const FeaturedTreatment = () => {
  const { data: treatments } = useGetTreatmentQuery();
  return (
    <div className={styles.section}>
      <div className={styles.wrapper}>
        {treatments
          ?.filter((treatment) => treatment.featured)
          .map((treatment, index) => (
            <div className={styles.featuredPost} key={treatment._id}>
              <div
                className={styles.left}
                style={{ order: index % 2 === 0 ? 1 : 2 }}
              >
                <h3>{treatment.title}</h3>
                <p>{treatment.desc}</p>
                <Link to={`/treatments/${treatment.slug}`}>LEARN MORE</Link>
                <span>FEATURED TREATMENT</span>
              </div>
              <div
                className={styles.right}
                style={{ order: index % 2 === 0 ? 2 : 1 }}
              >
                <img src={treatment.imageUrl} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedTreatment;
