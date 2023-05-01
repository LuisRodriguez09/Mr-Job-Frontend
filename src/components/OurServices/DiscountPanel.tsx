import { FC } from 'react';

const DiscountPanel: FC = () => {
	return (
		<div className="bg-blue-303F text-white rounded-2xl h-48 flex flex-col p-8">
			<h1 className='font-bold text-5xl leading-10'>20 % de descuento en tu primer servicio</h1>
			<span className='text-lg mt-6'>
				Obten un 20% de descuento en servicios participantes, para que te
				preocupes por otras cosas
			</span>
		</div>
	);
};

export default DiscountPanel;
