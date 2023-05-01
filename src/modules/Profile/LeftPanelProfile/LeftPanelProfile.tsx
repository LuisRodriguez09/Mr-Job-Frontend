import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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

	const navigate = useNavigate()

	return (
		<div className="">
			<div className={`${classesDiv} bg-gray-panel`} onClick={() => navigate('/profile')}>
				<CiUser className={classesLogo} />
				<span className={classesSpan}>Mi información</span>
			</div>
			<div className={classesDiv} onClick={() => navigate('/services')}>
				<TbTools className={classesLogo} />
				<span className={classesSpan}>Mis servicios</span>
			</div>
			<div className={classesDiv} onClick={() => navigate('/assignations')}>
				<MdOutlineAssignment className={classesLogo} />
				<span className={classesSpan}>Mis asignaciones</span>
			</div>
			<div className={classesDiv} onClick={() => navigate('/notifications')}>
				<AiOutlineBell className={classesLogo} />
				<span className={classesSpan}>Notificaciones</span>
			</div>
			<div className={classesDiv} onClick={() => navigate('/help')}>
				<RiErrorWarningLine className={classesLogo} />
				<span className={classesSpan}>Ayuda</span>
			</div>
		</div>
	);
};

export default LeftPanelProfile;
