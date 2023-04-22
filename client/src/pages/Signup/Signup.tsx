import PageTransition from "components/PageTransition/PageTransition";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.scss";
import { UserProps } from "model";
import { useSignupMutation } from "features/Auth/authApi";
import { useAppDispatch } from "app/hooks";
import { logIn } from "features/Auth/authSlice";
import useGuestLogin from "hooks/useGuestLogin";

const Signup = () => {
  const [error, setError] = useState({ isError: false, message: "" });
  const { logInGuest, isLoading: guestIsLoading } = useGuestLogin();
  const dispatch = useAppDispatch();
  const [fromDetails, setFromDetails] = useState<UserProps>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [signup, { isLoading: signupIsLoading }] = useSignupMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(fromDetails)
      .unwrap()
      .then((data) => {
        dispatch(logIn(data));
      })
      .catch((err) => {
        if (err.status === 401) {
          setError({ isError: true, message: err.data.error });
          setTimeout(() => {
            setError((error) => ({ ...error, isError: false }));
          }, 3000);
        } else {
          setError({ isError: true, message: "Something went wrong" });
          setTimeout(() => {
            setError((error) => ({ ...error, isError: false }));
          }, 3000);
        }
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    input: "fn" | "ln" | "em" | "ps" | "ph"
  ) => {
    input === "fn" &&
      setFromDetails((prev) => ({
        ...prev,
        firstName: e.target.value,
      }));
    input === "ln" &&
      setFromDetails((prev) => ({
        ...prev,
        lastName: e.target.value,
      }));
    input === "em" &&
      setFromDetails((prev) => ({
        ...prev,
        email: e.target.value,
      }));
    input === "ps" &&
      setFromDetails((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    input === "ph" &&
      setFromDetails((prev) => ({
        ...prev,
        phone: e.target.value,
      }));
  };

  return (
    <PageTransition>
      <div className={styles.signup}>
        <div className="container">
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
              <h1>Signup</h1>
              <label htmlFor="">First Name*</label>
              <input
                type="text"
                required
                value={fromDetails.firstName}
                onChange={(e) => handleInputChange(e, "fn")}
              />
              <label htmlFor="">Last Name*</label>
              <input
                type="text"
                required
                value={fromDetails.lastName}
                onChange={(e) => handleInputChange(e, "ln")}
              />
              <label htmlFor="">Phone</label>
              <input
                type="tel"
                value={fromDetails.phone}
                onChange={(e) => handleInputChange(e, "ph")}
              />
              <label htmlFor="">Email*</label>
              <input
                type="email"
                required
                value={fromDetails.email}
                onChange={(e) => handleInputChange(e, "em")}
              />
              <label htmlFor="">Password*</label>
              <input
                type="password"
                required
                value={fromDetails.password}
                onChange={(e) => handleInputChange(e, "ps")}
              />
              {error.isError && <p className={styles.error}>{error.message}</p>}
              <input
                type="submit"
                value={signupIsLoading ? "Signing up..." : "Signup"}
              />
              <p className={styles.or}>OR</p>
              <div className={styles.guest} onClick={logInGuest}>
                {guestIsLoading ? `LOGGING IN...` : `LOGIN AS GUEST`}
              </div>
              <p className={styles.login}>
                Have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Signup;
