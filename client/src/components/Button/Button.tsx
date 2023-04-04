import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  link: string;
  title: string;
  mt?: string;
  mb?: string;
}
const Button = ({ link, title, mb, mt }: ButtonProps) => {
  return (
    <Link
      to={link}
      className={styles.button}
      style={{ marginTop: mt, marginBottom: mb }}
    >
      {title}
    </Link>
  );
};

export default Button;
