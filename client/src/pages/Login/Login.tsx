import { useAppDispatch } from "app/hooks";
import PageTransition from "components/PageTransition/PageTransition";
import { useLoginMutation } from "features/Auth/authApi";
import { logIn } from "features/Auth/authSlice";
import useGuestLogin from "hooks/useGuestLogin";
import { UserProps } from "model";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [error, setError] = useState({ isError: false, message: "" });
  const { logInGuest, isLoading: guestIsLoading } = useGuestLogin();
  const dispatch = useAppDispatch();
  const [fromDetails, setFromDetails] = useState<
    Pick<UserProps, "email" | "password">
  >({
    email: "",
    password: "",
  });
  const [loginUser, { isLoading: loginIsLoading }] = useLoginMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(fromDetails)
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
    input: "em" | "ps"
  ) => {
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
  };
  return (
    <PageTransition>
      <div className={styles.login}>
        <div className="container">
          <div className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
              <h1>Login</h1>
              <label htmlFor="">Email</label>
              <input
                value={fromDetails.email}
                type="email"
                onChange={(e) => handleInputChange(e, "em")}
              />
              <label htmlFor="">Password</label>
              <input
                value={fromDetails.password}
                type="password"
                onChange={(e) => handleInputChange(e, "ps")}
              />
              {error.isError && <p className={styles.error}>{error.message}</p>}
              <input
                type="submit"
                value={loginIsLoading ? "Logging in..." : "Login"}
              />
              <p className={styles.signup}>
                Dont have an account? <Link to="/signup">Signup</Link>
              </p>
              <p className={styles.or}>OR</p>
              <div className={styles.guest} onClick={logInGuest}>
                {guestIsLoading ? `LOGGING IN...` : `LOGIN AS GUEST`}
              </div>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Login;
