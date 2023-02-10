import { FC } from 'react';
import {
	AiOutlineBell,
	CiUser,
	MdOutlineAssignment,
	RiErrorWarningLine,
	TbTools,
} from './icons';

const classesSpan = 'font-bold leading-7';
const classesDiv = 'flex w-full mb-6 cursor-pointer';
const classesLogo = 'text-xl mr-2';

const LeftPanelProfile: FC = () => {
	return (
		<div className="w-44">
			<div className={`${classesDiv} bg-gray-panel`}>
				<CiUser className={classesLogo} />
				<span className={classesSpan}>Mi información</span>
			</div>
			<div className={classesDiv}>
				<TbTools className={classesLogo} />
				<span className={classesSpan}>Mis servicios</span>
			</div>
			<div className={classesDiv}>
				<MdOutlineAssignment className={classesLogo} />
				<span className={classesSpan}>Mis asignaciones</span>
			</div>
			<div className={classesDiv}>
				<AiOutlineBell className={classesLogo} />
				<span className={classesSpan}>Notificaciones</span>
			</div>
			<div className={classesDiv}>
				<RiErrorWarningLine className={classesLogo} />
				<span className={classesSpan}>Ayuda</span>
			</div>
		</div>
	);
};

export default LeftPanelProfile;
