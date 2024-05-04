import useModalStore from "@/store/useModalStore";
import GuideModal from "./GuideModal";
import SkipModal from "./SkipModal";
import { useState, useEffect } from "react";

interface ModalMapType {
  [key: string]: () => JSX.Element;
}

const ModalMap: ModalMapType = {
  guide: GuideModal,
  skip: SkipModal,
};

const Modal = () => {
  const { modalType } = useModalStore();

  const ModalComponent = ModalMap[modalType];

  return (
    <div>
      <ModalComponent />
    </div>
  );
};

export default Modal;
