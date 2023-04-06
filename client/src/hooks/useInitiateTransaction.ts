import { useAppDispatch, useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { clearCart } from "features/Cart/cartSlice";
import { toggleModal } from "features/Modal/modalSlice";

const useInitiateTransaction = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [{ subTotal }, { user }] = useAppSelector((state) => [
    state.cartSlice,
    state.authSlice,
  ]);
  const paystackPopup = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY!,
      email: user?.email,
      amount: subTotal * 100,
      onSuccess: (transaction: any) => {
        navigate(`/success/${transaction.reference}`);
        dispatch(clearCart());
        dispatch(toggleModal());
        console.log(transaction);
      },
      onCancel: () => {
        console.log("closed");
      },
    });
  };
  return { paystackPopup };
};

export default useInitiateTransaction;
