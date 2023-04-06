import { useAppDispatch } from "app/hooks";
import { useLoginMutation } from "features/Auth/authApi";
import { logIn } from "features/Auth/authSlice";

const useGuestLogin = () => {
  const [loginUser, info] = useLoginMutation();
  const dispatch = useAppDispatch();
  const logInGuest = () => {
    loginUser({ email: "testing30@test.com", password: "testing30@test.com" })
      .unwrap()
      .then((data) => {
        dispatch(logIn(data));
      })
      .catch((err) => console.log(err));
  };
  return { logInGuest, ...info };
};

export default useGuestLogin;
