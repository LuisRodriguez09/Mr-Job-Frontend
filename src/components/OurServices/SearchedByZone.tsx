import { FC } from 'react';
import image from '../../images/Image.png';
import CardSearched from './CardSearched';
import imagecat1 from '../../images/ImageCat1.png';
import imagecat2 from '../../images/ImageCat2.png';

const SearchedByZone: FC = () => {
	return (
		<section>
			<h2 className="font-bold text-3xl py-5">Más buscados por tu zona</h2>
			<div className="container">
				<div className="grid grid-cols-2">
					<div>
						<img src={image} alt="Imágen ilustrativa" />
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
						<div className='pb-4'>
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
							image={imagecat1}
						/>
						</div>
						<CardSearched
							name="Isaul Hernández"
							location="Coatepec, Ixtapan"
							service="Enfermero, cuidado de personas"
							description="Cuidado de personas con discapacidades, enfermos y adultos mayores..."
							services={[
								{
									attribute: 'Enfermero',
									bg: 'bg-green-ECFD',
									color: 'text-green-027A',
								},
								{
									attribute: 'Cuidado de personas',
									bg: 'bg-pink-FDF2',
									color: 'text-pink-C115',
								},
							]}
							image={imagecat2}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SearchedByZone;
