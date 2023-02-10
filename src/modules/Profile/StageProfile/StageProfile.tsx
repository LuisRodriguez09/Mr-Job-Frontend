import { FC } from 'react';

interface IStageProfile {
	stage?: string;
}

const classesCircle =
	'h-10 w-10 rounded-full bg-red-stage flex justify-center items-center text-white';
const classesText = 'text-red-stage px-2';
const classesLine = 'bg-red-stage w-8 h-1';

const StageProfile: FC<IStageProfile> = () => {
	return (
		<div className="flex items-center">
			<div className="flex items-center px-3">
				<span className={classesCircle}>1</span>
				<p className={classesText}>Información</p>
				<div className={classesLine} />
			</div>
			<div className="flex items-center px-3">
				<span className={classesCircle}>2</span>
				<p className={classesText}>Mis servicios</p>
				<div className={classesLine} />
			</div>
			<div className="flex items-center px-3">
				<span className={classesCircle}>3</span>
				<p className={classesText}>Recorrido</p>
			</div>
		</div>
	);
};

export default StageProfile;
