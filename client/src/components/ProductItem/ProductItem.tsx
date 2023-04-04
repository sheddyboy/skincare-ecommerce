import Button from "components/Button/Button";
import { motion } from "framer-motion";
import { ProductProps } from "model";
import React from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = (product: ProductProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      viewport={{ once: true, amount: 0.5 }}
      className={styles.wrapper}
    >
      <img src={product.imageUrl} alt="" />
      <p className={styles.productTitle}>{product.title}</p>
      <div className={styles.productPrice}>
        {product.oldPrice && (
          <p className={styles.oldPrice}>{`$ ${product.oldPrice}.00 USD`}</p>
        )}
        <p className={styles.newPrice}>{`$ ${product.newPrice}.00 USD`}</p>
      </div>
      <Button link={`/shop/${product.slug}`} title="view product" mt="20px" />
    </motion.div>
  );
};

export default ProductItem;
