import Shimmer from "components/Shimmer/Shimmer";
import React from "react";
import Skeleton from "../Skeleton";
import styles from "./TreatmentSkeleton.module.scss";

const TreatmentSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton type="img" />
      <Skeleton type="title" mt={20} mb={10} />
      <Skeleton type="lText" mb={5} />
      <Skeleton type="sText" mb={25} />
      <Skeleton type="btn" />
      <Shimmer />
    </div>
  );
};

export default TreatmentSkeleton;
