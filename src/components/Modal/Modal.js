import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  if (!modalRef.current) {
    const div = document.createElement("div");
    modalRef.current = div;
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");

    modalRoot.appendChild(modalRef.current);

    return () => modalRoot.removeChild(modalRef.current); //equivalent to componentWillUnmount() for a class Component
  }, []);
  return createPortal(<div>{children}</div>, modalRef.current);
};

export default Modal;
