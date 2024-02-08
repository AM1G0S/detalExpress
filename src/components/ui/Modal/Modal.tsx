import React, {FC} from 'react';

import cls from './Modal.module.scss';

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = ({children, isOpen, onClose}) => {
	if (!isOpen) return null;
	return (
		<div className={cls.modal}>
			<div className={cls.modalWrapper}>
				{children}
				<button onClick={onClose} className={cls.close}>X</button>
			</div>
		</div>
	)
};

