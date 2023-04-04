import React from "react";
import styles from "./Skeleton.module.scss";

interface SkeletonProps {
  type: "title" | "lText" | "sText" | "img" | "btn" | "price";
  mt?: number;
  mb?: number;
}

const Skeleton = ({ type, mb, mt }: SkeletonProps) => {
  return (
    <div
      className={`skeleton ${styles[type]}`}
      style={{ marginBottom: mb, marginTop: mt }}
    ></div>
  );
};

export default Skeleton;
