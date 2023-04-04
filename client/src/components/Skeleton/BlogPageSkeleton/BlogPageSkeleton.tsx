import Shimmer from "components/Shimmer/Shimmer";
import React from "react";
import Skeleton from "../Skeleton";
import styles from "./BlogPageSkeleton.module.scss";

const BlogPageSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        <Skeleton type="price" />
        <Skeleton type="sText" />
      </div>
      <div className={styles.title}>
        <Skeleton type="lText" />
        <Skeleton type="sText" />
      </div>
      <div className={styles.image}>
        <Skeleton type="img" />
      </div>
      <div className={styles.richText}>
        <div className={styles.richTitle}>
          <Skeleton type="sText" />
        </div>
        <div className={styles.paragraph}>
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
        </div>
        <div className={styles.richTitle}>
          <Skeleton type="sText" />
        </div>
        <div className={styles.paragraph}>
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
        </div>
        <div className={styles.richTitle}>
          <Skeleton type="sText" />
        </div>
        <div className={styles.paragraph}>
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
        </div>
        <div className={styles.richTitle}>
          <Skeleton type="sText" />
        </div>
        <div className={styles.paragraph}>
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="sText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
          <Skeleton type="lText" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default BlogPageSkeleton;
