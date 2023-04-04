import { useAppDispatch } from "app/hooks";
import ProductItem from "components/ProductItem/ProductItem";
import QuestionsToggle from "components/QuestionsToggle/QuestionsToggle";
import ProductItemSkeleton from "components/Skeleton/ProductItemSkeleton/ProductItemSkeleton";
import { addToCart } from "features/Cart/cartSlice";
import {
  useGetProductsQuery,
  useGetSingleProductQuery,
} from "features/Product/productApi";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { getOtherProducts } from "helper";
import useModal from "hooks/useModal";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Product.module.scss";

const Product = () => {
  const { slug } = useParams();
  const { data: product, isSuccess } = useGetSingleProductQuery(slug!);
  const { data: products } = useGetProductsQuery();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const dispatch = useAppDispatch();
  const otherProducts = useMemo(() => {
    return products && slug ? getOtherProducts(products, slug, 2) : null;
  }, [products, slug]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    product && dispatch(addToCart({ product, count: qty }));
  };

  const { toggleModal } = useModal();
  useEffect(() => {
    return () => {
      setQty(1);
    };
  }, [slug]);

  const parentVariant: Variants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const childVariant: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.form
                key="item"
                className={styles.productSection}
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className={styles.image}>
                  <img src={product?.imageUrl} alt="" />
                </div>
                <div className={styles.details}>
                  <h1 className={styles.title}>{product?.title}</h1>
                  <p className={styles.desc}>{product?.desc}</p>
                  <div className={styles.price}>
                    {product?.oldPrice && (
                      <p
                        className={styles.oldPrice}
                      >{`$ ${product?.oldPrice}.00 USD`}</p>
                    )}
                    <p
                      className={styles.newPrice}
                    >{`$ ${product?.newPrice}.00 USD`}</p>
                  </div>
                  <div className={styles.itemDetails}>
                    <div className={styles.qty}>
                      <span>QUANTITY</span>
                      <input
                        type="number"
                        value={qty}
                        min={1}
                        onChange={(e) => setQty(Number(e.target.value))}
                        className={styles.qtyValue}
                      />
                    </div>
                    <div className={styles.size}>
                      <span>SELECT SIZE</span>
                      <div className={styles.select}>
                        <select
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          <option value="">Select Size</option>
                          {product?.size?.map((size, index) => (
                            <option key={index} value={size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    className={styles.addToCart}
                    value="ADD TO CART"
                    onClick={toggleModal}
                  />
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="skeleton"
                className={styles.productSection}
                exit={{ opacity: 0, transition: { delay: 2 } }}
              >
                <ProductItemSkeleton />
              </motion.div>
            )}
          </AnimatePresence>

          <div className={styles.infoSection}>
            <span className={styles.title}>INFORMATION AND SHIPPING INFO</span>
            <QuestionsToggle title="Product Information & Ingredients">
              <div className={styles.productInfo}>
                <h2>Product Information</h2>
                <p>{product?.productInfo}</p>
                <h2>Ingredients</h2>
                <p>{product?.ingredients}</p>
              </div>
            </QuestionsToggle>
            <QuestionsToggle title="Shipping Information">
              <div className={styles.shippingInfo}>
                <h2>Shipping Information</h2>
                <ol>
                  {product?.shippingInfo?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </div>
            </QuestionsToggle>
          </div>
          <div className={styles.otherProductSection}>
            <span className={styles.title}>OTHER PRODUCTS</span>
            <p className={styles.desc}>
              Pamper yourself at home with our premium skincare, aromatherapy,
              and bath products.
            </p>
            <div className={styles.otherProducts}>
              {otherProducts &&
                otherProducts.map((product) => (
                  <ProductItem {...product} key={product._id} />
                ))}
            </div>
          </div>
          <motion.div
            className={styles.benefitsSection}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.8, once: true }}
          >
            <span className={styles.title}>BENEFITS BUYING WITH RITUAL</span>
            <p className={styles.desc}>
              Shopping with Ritual offers a world of benefits for your wellness
              journey.
            </p>
            <motion.ul
              className={styles.benefits}
              variants={parentVariant}
              initial="initial"
              whileInView="whileInView"
              viewport={{ amount: 0.8, once: true }}
            >
              <motion.li variants={childVariant}>
                <img src="/images/payment.png" alt="" />
                <p>Enjoy peace of mind with secure payment options</p>
              </motion.li>
              <motion.li variants={childVariant}>
                <img src="/images/order.png" alt="" />
                <p>Enjoy fast, hassle-free shipping on all orders.</p>
              </motion.li>
              <motion.li variants={childVariant}>
                <img src="/images/support.png" alt="" />
                <p>top-notch support for a seamless shopping experience</p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
