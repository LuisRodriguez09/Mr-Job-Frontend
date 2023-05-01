import { FC } from 'react';
import AssignationsCarousel from '../AssignationsCarousel/AssignationsCarousel';
// import CardAssignation from '../CardAssignation';
// import DATA_MOCKS_ASSIGNATIONS from './mocks.json';

const AssignationsProfile: FC = () => {
	return (
		<div className="flex flex-col pl-6">
			<div className="flex justify-between">
				<h1 className="text-6xl font-bold pb-6">Mis asignaciones</h1>
				<p className='text-blue-485D font-bold cursor-pointer'>Ver todos</p>
			</div>
			<div>
				<AssignationsCarousel status="Pendientes" />
				<AssignationsCarousel status="Finalizadas" />
				<AssignationsCarousel status="Canceladas" />
				<AssignationsCarousel status="Garantía" />
			</div>
		</div>
	);
};

export default AssignationsProfile;
