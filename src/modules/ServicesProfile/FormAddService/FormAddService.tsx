import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Select from '../../../components/Inputs/Select/Select';
import TextInput from '../../../components/Inputs/TextInput';
import { optionsRangeServoce, optionsServiceHours, optionsServiceOnHolidays, optionsTypeService } from './constants';

const classesLabels = 'font-semibold';
const classesInput = 'border-blue-border';

interface IFormAddService {
	infoService?: {};
	newService?: React.Dispatch<React.SetStateAction<never[]>>;
	setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormAddService: FC<IFormAddService> = ({
	infoService,
	newService,
	setShow,
}) => {
	const { register, handleSubmit, reset } = useForm<IFormAddService>({
		mode: 'onChange',
	});

	useEffect(() => {
		reset(infoService);
	}, []);

	const onSubmit = handleSubmit((data) => {
		const services = JSON.parse(localStorage.getItem('services') || '[]');
		services.push(data);
		localStorage.setItem('services', JSON.stringify(services));
		if (newService) newService(services);
		if (setShow) setShow(false);
	});

	return (
		<div>
			<h1 className="font-bold text-lg">Agregar un servicio</h1>
			<p>Utilizar información de perfil</p>
			<form onSubmit={onSubmit}>
				<div className="flex">
					<div className="flex flex-col w-96 py-4 pr-2">
						<label className={classesLabels}>Nombre del negocio</label>
						<TextInput
							name="nameBussiness"
							register={register}
							className={classesInput}
						/>
					</div>
					<div className="flex flex-col w-96 py-4 pl-2">
						<label className={classesLabels}>
							Nombre del prestador de servicios
						</label>
						<TextInput
							name="nameOwnerServices"
							register={register}
							className={classesInput}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-96 py-4">
						<label className={classesLabels}>
							Descripción de mis servicios
						</label>
						<TextInput
							name="description"
							register={register}
							placeholder="Ej. Servicio de albañilería, colados, construcciones en general. "
						/>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-1/4 py-4">
						<label className={classesLabels}>Número de telefono</label>
						<TextInput name="phoneNumber" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Número de WhatsApp</label>
						<TextInput name="whatsAppNumber" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Rango de precios</label>
						<TextInput name="range" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Tipo de servicios</label>
						<Select
							options={optionsTypeService}
							name="serviceType"
							register={register}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-96 py-4 pr-2">
						<label className={classesLabels}>Dirección de servicio</label>
						<TextInput name="address" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Código postal</label>
						<TextInput name="zipCode" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Colonia</label>
						<TextInput name="suburb" register={register} />
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-1/4 py-4">
						<label className={classesLabels}>Estado</label>
						<TextInput name="state" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Rango de servicio</label>
						<Select
							options={optionsRangeServoce}
							name="serviceRange"
							register={register}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="flex flex-col w-1/4 py-4">
						<label className={classesLabels}>Días de servicio</label>
						<TextInput name="days" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Horario de servicio</label>
						<TextInput name="horary" register={register} />
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Servicio en días festivos</label>
						<Select
							options={optionsServiceOnHolidays}
							name="festiveDaysService"
							register={register}
						/>
					</div>
					<div className="flex flex-col w-1/4 px-2 py-4">
						<label className={classesLabels}>Horario de servicio</label>
						<Select
							options={optionsServiceHours}
							name="horaryService"
							register={register}
						/>
					</div>
				</div>
				<div className="flex">
					<div className="pr-2 w-1/2">
						<button className="w-full rounded-lg text-blue-border border-blue-border border h-12 self-end">
							Cancelar
						</button>
					</div>
					<div className="pl-2 w-1/2">
						<button
							type="submit"
							className="w-full bg-blue-1640 rounded-lg text-white h-12 self-end"
						>
							Agregar servicio
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormAddService;
