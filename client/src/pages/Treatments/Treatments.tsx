import Button from "components/Button/Button";
import TreatmentSkeleton from "components/Skeleton/TreatmentSkeleton/TreatmentSkeleton";
import { useGetTreatmentQuery } from "features/Treatment/treatmentApi";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./Treatments.module.scss";

const Treatments = () => {
  const { data: treatments, isSuccess } = useGetTreatmentQuery();

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.title}
          >
            TREATMENTS
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            className={styles.desc}
          >
            Experience the ultimate pampering with our extensive menu of
            treatments.
          </motion.p>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div key="data" className={styles.treatments}>
                {treatments?.map((treatment) => (
                  <motion.div
                    className={styles.treatment}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.3 },
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    key={treatment._id}
                  >
                    <img src={treatment.imageUrl} alt="" />
                    <h2>{treatment.title}</h2>
                    <p>{treatment.desc}</p>
                    <Button
                      title="LEARN MORE"
                      link={`/treatments/${treatment.slug}`}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="skeleton"
                className={styles.treatments}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 2 } }}
              >
                {[1, 2, 3, 4, 5, 6].map((skeleton) => (
                  <TreatmentSkeleton key={skeleton} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
