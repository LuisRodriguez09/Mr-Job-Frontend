import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import TextInput from '../../../components/Inputs/TextInput';

const classesLabels = 'font-semibold';

const FormSupport: FC = () => {
	const [useSavedInfo, setUseSavedInfo] = useState(false);

	const { register, reset } = useForm({
		mode: 'onChange',
	});

	useEffect(() => {
		if(useSavedInfo){
			reset(JSON.parse(localStorage.getItem('infoProfile') || '{}'))
		} else {
			reset({name: "", phoneNumber: ""})
		}
	}, [useSavedInfo])

	return (
		<div className="w-full border rounded m-auto flex flex-col p-4 my-16 border-gray-E9">
			<div className="flex flex-col">
				<div className="flex pl-2">
					<p>Utilizar información de perfil</p>
					<input
						type="checkbox"
						className="ml-2 border rounded-full"
						checked={useSavedInfo}
						onChange={() => setUseSavedInfo(!useSavedInfo)}
					/>
				</div>

				<form action="">
					<div className="flex flex-col">
						<div className="flex py-4">
							<div className="flex flex-col w-1/2 px-2">
								<label className={classesLabels}>Nombre completo</label>
								<TextInput name="name" register={register} />
							</div>
							<div className="flex flex-col w-1/2 px-2">
								<label className={classesLabels}>Nombre completo</label>
								<TextInput name="name" register={register} />
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex flex-col w-1/2 px-2">
								<label className={classesLabels}>Número de teléfono</label>
								<TextInput name="phoneNumber" register={register} />
							</div>
							<div className="flex flex-col w-1/2 px-2">
								<label className={classesLabels}>
									Selecciona con que servicio tienes problemas
								</label>
								<select name="name" {...register} className="font-bold rounded-xl border border-blue-border-input h-14" >
									<option value="" >Selecciona una opción</option>
									<option value="albañilería" className='font-bold'>Albañilería</option>
								</select>
							</div>
						</div>
						<div className="flex py-4">
							<div className="flex flex-col w-full px-2">
								<label className={classesLabels}>Mensaje</label>
								<textarea
									name="email"
									{...register}
									className="rounded-xl border border-blue-border-input h-32"
								/>
							</div>
						</div>
						<div className="px-2">
							<div>
								<label>
									<input type="checkbox" id="cbox1" value="first_checkbox" />{' '}
									Acepto los términos y condiciones
								</label>
							</div>
							<div className="py-2 flex justify-end">
								<button className="bg-blue-1640 text-white rounded py-2 px-16 w-1/2 h-12">
									Contactar a soporte
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormSupport;
