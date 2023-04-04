import React from "react";
import Button from "components/Button/Button";
import { useGetProductsQuery } from "features/Product/productApi";
import styles from "./OurShop.module.scss";
import ProductItem from "components/ProductItem/ProductItem";
import { motion } from "framer-motion";

const OurShop = () => {
  const { data: products } = useGetProductsQuery();
  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.div
            className={styles.titleWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8, once: true }}
          >
            <span>OUR SHOP</span>
            <p className={styles.title}>
              Pamper yourself at home with our premium skincare, aromatherapy,
              and bath products.
            </p>
            <Button link="/shop" title="explore products" mt="30px" />
          </motion.div>
          <div className={styles.featuredProducts}>
            {products
              ?.filter((product) => product.featured)
              .map((product) => (
                <ProductItem {...product} key={product._id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShop;
