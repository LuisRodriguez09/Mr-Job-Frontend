import { FC } from 'react';
import Button from '../../components/Inputs/Button';
import {
	ContainerFreeMonth,
	ContainerNameServices,
	ContainerNeedAService,
	RightContentAddService,
	TitleNeedAService,
} from './AddPanelMainStyles';
import ImageMecanic from '../../images/pass.png';
import ImageGarden from '../../images/garden.png';
import ImageFemaleTeacher from '../../images/female-teacher.png';
import ImageWoman from '../../images/woman-addpanel.png';
import { servicesNames } from './constants';

const AddPanelMain: FC = () => {
	return (
		<section className="flex flex-col">
			<ContainerNeedAService className="self-center">
				<div className="flex flex-col justify-evenly">
					<TitleNeedAService>¿Necesitas un plomero?</TitleNeedAService>
					<p>
						Busca los servicios mas cercanos a ti, desde plomeros, jardineros,
						mecanicos, arquitectos, estilistas, servicios de mudanzas y más, con
						garantia de servicio.
					</p>
					<Button size="medium">Ver servicios</Button>
				</div>
				<RightContentAddService>
					<div>
						<div>
							<img src={ImageMecanic} alt="" />
						</div>
						<span>Mecánicos</span>
					</div>
					<div>
						<div>
							<img src={ImageFemaleTeacher} alt="" />
						</div>
						<span>Maestros</span>
					</div>
					<div>
						<div>
							<img src={ImageGarden} alt="" />
						</div>
						<span>Jardineros</span>
					</div>
				</RightContentAddService>
			</ContainerNeedAService>
			<ContainerFreeMonth>
				<div className="flex flex-col">
					<TitleNeedAService>Prueba gratis 1 mes</TitleNeedAService>
					<p>
						Da de alta tu negocio en Mr.Job Gratis por un mes, y aumenta
						potencialmente tus ventas, con clientes seguros
					</p>
					<div className="flex w-3/4 justify-between mt-4">
						<Button size="medium">Iniciar mi prueba gratis</Button>
						<Button size="medium" outline={true}>
							Contactar un asesor
						</Button>
					</div>
				</div>
				<div>
					<img src={ImageWoman} alt="" />
				</div>
			</ContainerFreeMonth>
			<ContainerNameServices>
				<h3 className="text-center mb-3">Algunos de nuestro servicios</h3>
				<div>
					{servicesNames.map((service, i) => (
						<li key={i} className={i % 2 === 0 ? 'font-bold' : ''}>
							{service}
						</li>
					))}
				</div>
			</ContainerNameServices>
		</section>
	);
};

export default AddPanelMain;
