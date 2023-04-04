import Shimmer from "components/Shimmer/Shimmer";
import React from "react";
import Skeleton from "../Skeleton";
import styles from "./ProductItemSkeleton.module.scss";

const ProductItemSkeleton = () => {
  return (
    <>
      <div className={styles.left}>
        <Skeleton type="img" />
        <Shimmer />
      </div>
      <div className={styles.right}>
        <Skeleton type="title" />
        <Skeleton type="lText" mt={20} mb={4} />
        <Skeleton type="lText" mb={4} />
        <Skeleton type="sText" mb={10} />
        <Skeleton type="price" mt={30} mb={25} />
        <div className={styles.details}>
          <div className={styles.qty}>
            <Skeleton type="sText" mb={10} />
            <Skeleton type="btn" />
          </div>
          <div className={styles.size}>
            <Skeleton type="sText" mb={10} />
            <Skeleton type="btn" />
          </div>
        </div>
        <Skeleton type="btn" />
        <Shimmer />
      </div>
    </>
  );
};

export default ProductItemSkeleton;
