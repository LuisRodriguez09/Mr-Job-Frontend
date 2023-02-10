import { FC } from 'react';
import TextInput from '../../../components/Inputs/TextInput';
import ImageJesus from '../../../images/deleteimagejesus.png';

const classesLabels = 'font-semibold';

const StageInformation: FC = () => {
	return (
		<div className="py-4">
			<h1 className="font-bold text-6xl">Información</h1>
			<div>
				<div className="flex pt-6 pb-4">
					<img src={ImageJesus} alt="Photo user" />
					<div className="px-4">
						<p className="font-semibold">Jesús Arturo Méndez Vázquez</p>
						<p className="font-semibold">jamv.13@hotmail.com</p>
						<p className="font-semibold">5560978904</p>
					</div>
				</div>
				<form className="flex flex-col p-2 bg-gray-panel">
					<div className="flex">
						<div className="flex flex-col w-2/4 px-2">
							<label className={classesLabels}>Nombre completo</label>
							<TextInput />
						</div>
						<div className="flex flex-col w-2/4 px-2">
							<label className={classesLabels}>Correo electrónico</label>
							<TextInput />
						</div>
					</div>
					<div className="flex">
						<div className="flex flex-col w-1/4 px-2">
							<label className={classesLabels}>Número de teléfono</label>
							<TextInput />
						</div>
						<div className="flex flex-col w-1/4 px-2">
							<label className={classesLabels}>Fecha de nacimiento</label>
							<TextInput />
						</div>
						<div className="flex flex-col w-2/4 px-2">
							<label className={classesLabels}>RFC</label>
							<TextInput />
						</div>
					</div>
					<div className="flex">
						<div className="flex flex-col w-2/4 px-2">
							<label className={classesLabels}>Dirección</label>
							<TextInput />
						</div>
						<div className="flex flex-col w-1/4 px-2">
							<label className={classesLabels}>Código postal</label>
							<TextInput />
						</div>
						<div className="flex flex-col w-1/4 px-2">
							<label className={classesLabels}>Colonia</label>
							<TextInput />
						</div>
					</div>
					<div className="flex flex-col w-1/4 px-2">
						<label className={classesLabels}>Estado</label>
						<TextInput />
					</div>
					<button className="bg-blue-1640 w-2/4 rounded-lg text-white h-12 self-end">
						Guardar
					</button>
				</form>
			</div>
		</div>
	);
};

export default StageInformation;
