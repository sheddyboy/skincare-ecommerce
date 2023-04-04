import Shimmer from "components/Shimmer/Shimmer";
import React from "react";
import Skeleton from "../Skeleton";
import styles from "./ProductSkeleton.module.scss";

const ProductSkeleton = () => {
  return (
    <div className={styles.wrapper}>
      <Skeleton type="img" />
      <Skeleton type="title" mb={10} mt={20} />
      <Skeleton type="price" mt={10} />
      <Skeleton type="btn" mt={20} />
      <Shimmer />
    </div>
  );
};

export default ProductSkeleton;
