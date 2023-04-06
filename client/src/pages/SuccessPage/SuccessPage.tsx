import Button from "components/Button/Button";
import { useGetTransactionQuery } from "features/Transaction/transactionApi";
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SuccessPage.module.scss";

const SuccessPage = () => {
  const { ref } = useParams();
  const { data, error } = useGetTransactionQuery({ ref: ref! });
  console.log(data);
  console.log(error);
  return (
    <div className={styles.successPage}>
      <div className="container">
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Payment successful</h1>
          <img src="/images/check-mark.png" alt="" width={70} />
          <div className={styles.details}>
            <div className={styles.detail}>
              <span>Payment type</span>
              <p>{data?.data.channel}</p>
            </div>
            <div className={styles.detail}>
              <span>Email</span>
              <p>{data?.data.customer.email}</p>
            </div>
            <div className={styles.detail}>
              <span>Reference id</span>
              <p>{data?.data.reference}</p>
            </div>
            <div className={styles.detail}>
              <span>Amount paid</span>
              <p>{`${data?.data.amount}`}</p>
            </div>
          </div>
          <Button title="Return Home" link="/" />
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
