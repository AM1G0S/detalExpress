import React, { FC, memo, useEffect, useRef, useState } from 'react';

import cls from "./Modal.module.scss";

interface ModalProps {
	children: React.ReactNode;
	isOpen: boolean;
	title?: string;
	onClose: () => void;
}

export const Modal: FC<ModalProps> = memo(({ children, isOpen, onClose, title }) => {
	const ModalRef = useRef<HTMLDivElement>(null);
	const [justOpened, setJustOpened] = useState(false);
	
	useEffect(() => {
		if (isOpen) {
			setJustOpened(true);
			setTimeout(() => setJustOpened(false), 10);
		}
	}, [isOpen]);
	
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (justOpened) return; // Игнорируем клики сразу после открытия
			if (ModalRef.current && !ModalRef.current.contains(event.target as Node)) {
				onClose();
			}
		};
		
		document.addEventListener('mousedown', handleClickOutside);
		
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [onClose, justOpened]);
	
	return isOpen ? (
		<div className={cls.modal}>
			<div ref={ModalRef} className={cls.modalWrapper}>
				<div className={cls.modalTop}>
					<h2 className={cls.modalTitle}>{title}</h2>
					<button onClick={onClose} className={cls.close}>
						<svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg"
						     x="0px" y="0px" viewBox="0 0 512.001 512.001"
						>
							<path
								d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"></path>
						</svg>
					</button>
				</div>
				{children}
			</div>
		</div>
	) : null;
});
