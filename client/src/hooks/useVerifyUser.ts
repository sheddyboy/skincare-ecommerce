import { useAppDispatch } from "app/hooks";
import { useVerifyTokenMutation } from "features/Auth/authApi";
import { logIn } from "features/Auth/authSlice";
import { UserProps } from "model";
import { useEffect } from "react";

const useVerifyUser = () => {
  const dispatch = useAppDispatch();
  const [verifyUser] = useVerifyTokenMutation();

  useEffect(() => {
    const checkUser = localStorage.getItem("User");
    const user = checkUser
      ? (JSON.parse(checkUser) as { user: UserProps; token: string })
      : null;
    if (user) {
      verifyUser({ token: user.token })
        .unwrap()
        .then(() => dispatch(logIn(user)))
        .catch((err) => console.log(err));
    }
  }, [dispatch, verifyUser]);

  return;
};

export default useVerifyUser;
