import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import support1 from '../../../images/support1.png';
import support2 from '../../../images/support2.png';
import support3 from '../../../images/support3.png';

const ContactSupport: FC = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-gray-panel w-3/4 flex flex-col m-auto rounded py-16 items-center my-16 ">
			<div className="flex">
				<img src={support1} alt="" className="absolute -ml-10" />
				<img src={support2} alt="" className="z-30" />
				<img src={support3} alt="" className="absolute ml-10" />
			</div>
			<h3 className="font-bold text-lg">¿No encuentras lo que buscas?</h3>
			<p className="text-lg text-gray-6670">
				Para buscar una pregunta personalizada llena una solicitud y el equipo
				de Mr.Job te contactara
			</p>
			<div className="py-4">
				<button
					className="bg-blue-1640 text-white text-lg py-2 px-32 rounded"
					onClick={() => navigate('/support')}
				>
					Contactar a soporte
				</button>
			</div>
		</div>
	);
};

export default ContactSupport;
