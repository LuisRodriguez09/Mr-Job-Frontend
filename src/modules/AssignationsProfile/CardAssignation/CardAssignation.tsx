import { FC } from 'react';
import ActionButton from '../../../components/ActionButton';
import { getColorAssignation } from '../AssignationsCarousel/utils';

interface ICardAssignationProps {
	name: string;
	idProcess: number;
	status: string;
}

const CardAssignation: FC<ICardAssignationProps> = ({
	name,
	idProcess,
	status,
}) => {
	return (
		<div className="w-80 flex mr-2 shadow-xl">
			<div
				className={`bg-${getColorAssignation(
					status
				)} w-2 rounded-tl rounded-bl`}
			></div>
			<div className="p-4 flex flex-col justify-between">
				<div className="flex">
					<h2 className="font-bold text-base">{name}</h2>
					<ActionButton id={idProcess} status={status} />
				</div>
				<span className="bg-blue-cotization rounded-3xl text-white w-24 p-1 my-2 text-center">
					Cotización
				</span>
				<div className="flex justify-between py-2">
					<div className="text-sm">
						<p className="text-gray-A2A9">Inicio del proceso</p>
						<span>00/00/0000</span>
					</div>
					<div className="text-sm">
						<p className="text-gray-A2A9">Cotización</p>
						<span>$8,700</span>
					</div>
				</div>
				<div className="flex justify-between py-2">
					<div className="text-sm">
						<p className="text-gray-A2A9">ID del proceso</p>
						<span>{idProcess}</span>
					</div>
					<div className="text-sm">
						<p className="text-gray-A2A9">Fecha de inicio</p>
						<span>-- --</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardAssignation;
