import { useAppDispatch, useAppSelector } from "app/hooks";
import { toggleModal as toggle } from "features/Modal/modalSlice";

const useModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modalSlice);
  const toggleModal = () => {
    dispatch(toggle());
  };
  return { isOpen, toggleModal };
};

export default useModal;
