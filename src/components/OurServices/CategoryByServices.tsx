import { FC } from 'react';
import CardCategory from './CardCategory';

const CategoryByServices: FC = () => {
	return (
		<main className="py-10">
			<h3 className="text-4xl font-bold">Categoría de servicios</h3>
			<div className="flex justify-between py-4">
				<span>Buscar por categoría</span>
				<span className="cursor-pointer font-bold text-gray-485D">
					Ver todos
				</span>
			</div>
			<div className='flex'>
				{[1, 2, 3, 4, 5, 6].map((item) => (
					<CardCategory key={item} />
				))}
			</div>
		</main>
	);
};

export default CategoryByServices;
