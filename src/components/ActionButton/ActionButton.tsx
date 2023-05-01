import { FC, useState, useRef } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useClikOutside } from '../../hooks/useClickOutside';

const classesOptions = 'text-blue-1640 font-bold cursor-pointer py-1';

const ActionButton: FC<{ id: number, status: string }> = ({ id, status }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [showPopUp, setShowPopUp] = useState<boolean>(false);
	const [tooltipMessage, setTooltipMessage] = useState<boolean>(false);

	const navigate = useNavigate();
	useClikOutside(ref, setShowPopUp);

	return (
		<div>
			<BsThreeDotsVertical
				className="cursor-pointer"
				onClick={() => {
					setShowPopUp(!showPopUp);
				}}
			/>
			{showPopUp && (
				<div className="absolute z-10 flex" ref={ref}>
					<div className="w-32 max-h-32 bg-gray-panel rounded p-4">
						<div
							className={classesOptions}
							onClick={() => navigate(`/assignation/${id}/${status}`)}
						>
							Abrir
						</div>
						<div className={classesOptions}>Eliminar</div>
						<div
							className={classesOptions}
							onMouseOver={() => setTooltipMessage(!tooltipMessage)}
						>
							Mover a <span>{'>'}</span>
						</div>
					</div>
					{tooltipMessage && (
						<div className="ml-2 w-60 max-h-32 bg-gray-panel rounded p-2 mt-8">
							<div className="flex">
								<span
									className={`bg-green-finish rounded-full w-4 h-4 flex self-center`}
								></span>
								<p className={`${classesOptions} pl-2`}>Finalizada</p>
							</div>
							<div className="flex">
								<span
									className={`bg-red-cancelled rounded-full w-4 h-4 flex self-center`}
								></span>
								<p className={`${classesOptions} pl-2`}>
									Canceladas / aplazadas
								</p>
							</div>
							<div className="flex">
								<span
									className={`bg-purple-warranty rounded-full w-4 h-4 flex self-center`}
								></span>
								<p className={`${classesOptions} pl-2`}>Garantía</p>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ActionButton;
