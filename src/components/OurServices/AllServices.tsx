import { FC } from 'react';
import CardSearched from './CardSearched';
import imageones from '../../images/ImageOneS.png';
import imagetwos from '../../images/ImageTwoS.png';
import imagethrees from '../../images/ImageThreeS.png';
import imagefours from '../../images/ImageFourS.png';
import imagefives from '../../images/ImageFiveS.png';
import imagesixs from '../../images/ImageSixS.png';

const AllServices: FC = () => {
	return (
		<section className='py-8'>
            <h1 className='font-bold text-2xl py-8'>Todos los servicios</h1>
			<div className="container">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<img src={imageones} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
					<div>
						<img src={imagetwos} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
					<div>
						<img src={imagethrees} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
                    <div>
						<img src={imagefours} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
                    <div>
						<img src={imagefives} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
                    <div>
						<img src={imagesixs} alt="Imágen ilustrativa" />
						<CardSearched
							name="Alex Luna"
							location="Coatepec, Harinas"
							service="Servicios de grúa express"
							description="Servicio de gruas las 24 horas 7 días de la semana, abarcamos varios municipios..."
							services={[
								{
									attribute: 'Grúas',
									bg: 'bg-blue-F0F9',
									color: 'text-blue-026A',
								},
								{
									attribute: 'Traslado de vehículos',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
						/>
					</div>
				</div>
                
			</div>
		</section>
	);
};

export default AllServices;
