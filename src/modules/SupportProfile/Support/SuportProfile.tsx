import { FC } from 'react';
import FormSupport from '../FormSupport';

const SuportProfile: FC = () => {
	return (
		<div className="pl-6 pb-8 w-full">
			<div className="w-full">
				<h1 className="text-6xl font-bold pb-6">Soporte</h1>
			</div>
			<p className="font-bold text-2xl">Contactar a soporte</p>
			<div>
				<FormSupport />
			</div>
		</div>
	);
};

export default SuportProfile;
