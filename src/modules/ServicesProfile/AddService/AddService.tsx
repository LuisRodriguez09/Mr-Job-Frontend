import { FC, useState, useEffect } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import CardServicesSearched from '../../../components/CardSevicesSearched/CardServicesSearched';
import Modal from '../../../components/Modal/Modal';
import StageProfile from '../../Profile/StageProfile';
import FormAddService from '../FormAddService/FormAddService';
import TabService from '../TabService';
import { servicesZoneMock } from './mock';

const AddService: FC = () => {
	const [showAddServiceModal, setShowAddServiceModal] = useState(false);
	const [services, setServices] = useState([]);

	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('services') || '[]');
		setServices(users);
	}, []);

	return (
		<div className="h-3/4 pl-6 pb-8">
			<div className="flex w-full h-32 justify-between rounded bg-gray-panel">
				<StageProfile />
				<span className="font-bold text-3xl flex justify-center items-center p-4 leading-10">
					Completa tu perfil para tener una mejor experiencia
				</span>
			</div>
			<h1 className="text-6xl font-bold py-6">Mis servicios</h1>
			{services.map((service, i) => (
				<TabService key={i} infoService={service} />
			))}
			<div
				className={`flex cursor-pointer basis-auto py-2`}
				onClick={() => setShowAddServiceModal(true)}
			>
				<AiOutlinePlusCircle className="not-italic font-normal text-2xl pr-2 flex self-center" />{' '}
				<p className="text-lg text-gray-485D font-bold">Agregar servicio</p>
			</div>

			<Modal show={showAddServiceModal} setShow={setShowAddServiceModal}>
				<FormAddService
					newService={setServices}
					setShow={setShowAddServiceModal}
				/>
			</Modal>

			<div>
				<h1 className="font-bold text-2xl py-8">
					Servicios más buscados en tu zona
				</h1>
				<ul className="flex flex-wrap flex-grow-0 flex-shrink-0 basis-1/3">
					{servicesZoneMock.map(({ id, name, price, stars, punts }) => (
						<li key={id} className="basis-1/3">
							<CardServicesSearched
								key={id}
								id={id}
								name={name}
								price={price}
								stars={stars}
								punts={punts}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AddService;
