import React, { FC, memo } from "react";

import cls from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = memo(({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;
  return (
    <div className={cls.modal}>
      <div className={cls.modalWrapper}>
        <div className={cls.modalTop}>
          <h2 className={cls.modalTitle}>{title}</h2>
		  <button onClick={onClose} className={cls.close}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
});
