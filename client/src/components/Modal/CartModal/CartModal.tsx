import { useAppDispatch, useAppSelector } from "app/hooks";
import { removeFromCart, updateQty } from "features/Cart/cartSlice";
import { AnimatePresence, motion, Variants } from "framer-motion";
import useInitiateTransaction from "hooks/useInitiateTransaction";
import useModal from "hooks/useModal";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartModal.module.scss";

const CartModal = () => {
  const { paystackPopup } = useInitiateTransaction();
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const { cartItems, subTotal } = useAppSelector((state) => state.cartSlice);
  const { toggleModal } = useModal();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    paystackPopup();
  };
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ x: "100%" }}
      animate={{ x: "0%", transition: { delay: 0.1 } }}
      exit={{ x: "100%" }}
    >
      <div className={styles.header}>
        <p>Your Cart</p>
        <div className={styles.image} onClick={toggleModal}>
          <img src="/images/add.png" alt="" />
        </div>
      </div>
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          {cartItems.length === 0 ? (
            <motion.div
              key="emptyCart"
              className={styles.emptyCart}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span>You haven't added any products yet.</span>
              <Link to="/shop" onClick={toggleModal}>
                <div className={styles.browse}>
                  <p>BROWSE PRODUCTS</p>
                  <div className={styles.line}></div>
                </div>
              </Link>
            </motion.div>
          ) : (
            <motion.form
              key="cart"
              className={styles.cart}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              onSubmit={handleSubmit}
            >
              <div className={styles.top}>
                <AnimatePresence>
                  {cartItems.map((cartItem) => (
                    <motion.div
                      key={cartItem.product._id}
                      exit={{
                        x: "100%",
                        transition: { easings: "ease-out", duration: 0.2 },
                      }}
                      className={styles.cartItem}
                    >
                      <div className={styles.left}>
                        <img
                          src={cartItem.product.imageUrl}
                          width={80}
                          alt=""
                        />
                      </div>
                      <div className={styles.right}>
                        <div className={styles.details}>
                          <div className={styles.itemDetails}>
                            <p className={styles.title}>
                              {cartItem.product.title}
                            </p>
                            <div
                              className={styles.price}
                            >{`$ ${cartItem.product.newPrice}.00 USD`}</div>
                          </div>
                          <div className={styles.itemQty}>
                            <input
                              min={1}
                              type="number"
                              value={cartItem.count}
                              onChange={(e) =>
                                dispatch(
                                  updateQty({
                                    _id: cartItem.product._id!,
                                    count: Number(e.target.value),
                                  })
                                )
                              }
                            />
                          </div>
                        </div>
                        <div
                          className={styles.remove}
                          onClick={() => {
                            dispatch(
                              removeFromCart({ _id: cartItem.product._id! })
                            );
                          }}
                        >
                          <p>REMOVE</p>
                          <div className={styles.line}></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              <div className={styles.bottom}>
                <div className={styles.subTotal}>
                  <span>Subtotal</span>
                  <p>{`$ ${subTotal}.00 USD`}</p>
                </div>
                <input type="submit" value="CONTINUE TO CHECKOUT" />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CartModal;
