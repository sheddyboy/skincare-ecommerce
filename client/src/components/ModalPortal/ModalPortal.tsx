import Modal from "components/Modal/Modal";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

const ModalPortal = ({ toggleModal, children }: ModalPortalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const modalRootDiv = document.createElement("div");
    document.body.appendChild(modalRootDiv);
    setModalRoot(modalRootDiv);

    return () => {
      document.body.removeChild(modalRootDiv);
    };
  }, []);

  return modalRoot
    ? ReactDOM.createPortal(
        <Modal toggleModal={toggleModal}>{children}</Modal>,
        modalRoot
      )
    : null;
};

export default ModalPortal;
