import { FC } from 'react';

interface ICardSearched {
	name: string;
	location: string;
	service: string;
	description: string;
	services: Array<{ attribute: string; color: string; bg: string }>;
	image?: string;
}

const CardSearched: FC<ICardSearched> = ({
	name,
	location,
	service,
	description,
	services,
	image,
}) => {
	return (
		<div className="flex">
			{image && <img src={image} alt="Imágen" />}
			<div className="p-3 flex flex-col">
				<span className="text-purple-6941 font-semibold">{`${name} • ${location}`}</span>
				<span className="font-semibold text-lg">{service}</span>
				<p className="text-gray-6670">{description}</p>
				<ul className="flex">
					{services.map(({ attribute, bg, color }, i) => (
						<li
							className={`mr-2 p-2 ${color} ${bg} rounded-3xl font-medium`}
							key={i}
						>
							{attribute}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default CardSearched;
