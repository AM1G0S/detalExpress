import classnames from "classnames";
import {FC, memo} from "react";
import {Modal} from "../../ui/Modal/Modal.tsx";
import cls from "./StatusModal.module.scss"

import errorSvg from "../../../assets/img/error.svg"
import successSvg from "../../../assets/img/success.svg"

interface IProps {
	status: 'success' | 'error';
	title: string;
	text: string;
	isOpen: boolean;
	onClose: () => void;
}

export const StatusModal: FC<IProps> = memo((props) => {
	const {status, title, text, isOpen, onClose} = props
	
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={classnames(cls.status, cls[status])}>
				{
					status === 'success' ? (
						<img src={successSvg} alt="success"/>
					) : <img src={errorSvg} alt="error"/>
				}
				<h2 className={cls.title}>{title}</h2>
				<p className={cls.text}>{text}</p>
			</div>
		</Modal>
	)
})
