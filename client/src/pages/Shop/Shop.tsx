import ProductItem from "components/ProductItem/ProductItem";
import ProductSkeleton from "components/Skeleton/ProductSkeleton/ProductSkeleton";
import { useGetProductsQuery } from "features/Product/productApi";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "./Shop.module.scss";

const Shop = () => {
  const { data: products, isSuccess } = useGetProductsQuery();
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.title}
          >
            Our Shop
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.3 } }}
            className={styles.desc}
          >
            Pamper yourself at home with our premium skincare, aromatherapy, and
            bath products.
          </motion.p>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div className={styles.products} key="products">
                {products?.map((product) => (
                  <ProductItem {...product} key={product._id} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="skeleton"
                className={styles.products}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { delay: 2 } }}
              >
                {[1, 2, 3, 4].map((skeleton) => (
                  <ProductSkeleton key={skeleton} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Shop;
