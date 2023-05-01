import { FC } from 'react';
import Notification from '../../NotificationsProfile/Notification/Notification';
import StageInformation from '../StageInformation';
import StageProfile from '../StageProfile';

const InfoProfile: FC = () => {
	return (
		<div className="w-full pl-6">
			<div className="flex w-full h-32 justify-between rounded bg-gray-panel">
				<StageProfile />
				<span className="font-bold text-3xl flex justify-center items-center p-4 leading-10">
					Completa tu perfil para tener una mejor experiencia
				</span>
			</div>
			<StageInformation />
			<Notification
				message="Obtén tu membresía con beneficios como puntos por cada servicio, servicios 24/7, atención a cliente 24hrs y muchos más"
				id="$1,260"
				typeNotification="Tipo de membresía: Básica"
				status="30% de descuento, tiempo limitado"
				subtext="Anual"
			/>
			<div className='flex pb-8'>
				<button className='h-14 w-1/2 rounded-lg border border-blue-1640 text-blue-1640 mr-2'>Ver planes</button>
				<button className='h-14 bg-blue-1640 text-white w-1/2 rounded-lg'>La quiero</button>
			</div>
		</div>
	);
};

export default InfoProfile;
