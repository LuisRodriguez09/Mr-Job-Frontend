import { FC } from 'react';
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
		</div>
	);
};

export default InfoProfile;
