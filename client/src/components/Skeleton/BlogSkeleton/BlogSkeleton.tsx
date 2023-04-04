import Shimmer from "components/Shimmer/Shimmer";
import React from "react";
import Skeleton from "../Skeleton";
import styles from "./BlogSkeleton.module.scss";

const BlogSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <Skeleton type="img" />
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.tag}>
            <Skeleton type="price" />
          </div>
          <div className={styles.date}>
            <Skeleton type="sText" />
          </div>
        </div>
        <div className={styles.bottom}>
          <Skeleton type="lText" mb={3} />
          <Skeleton type="sText" />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default BlogSkeleton;
