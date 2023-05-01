import React, { FC, useRef } from 'react';
import { useClikOutside } from '../../hooks/useClickOutside';

interface ModalProps {
	children: React.ReactNode;
	show: boolean;
	setShow: (arg: boolean) => void;
}

const Modal: FC<ModalProps> = ({ children, show, setShow }) => {
	const ref = useRef<HTMLDivElement>(null);
	const handleClose: (value: React.SetStateAction<boolean>) => void = () =>
		setShow(false);

	useClikOutside(ref, setShow);

	return (
		<>
			{show && (
				<div
					style={{
						position: 'fixed',
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						backgroundColor: 'rgba(0, 0, 0, 0.5)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onClick={() => handleClose}
				>
					<div
						ref={ref}
						style={{
							backgroundColor: 'white',
							padding: '2rem',
							borderRadius: '5px',
							boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
							maxWidth: '80%',
						}}
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
