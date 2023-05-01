import { FC } from 'react';
import { AiOutlineStar } from 'react-icons/ai';

interface ICardServicesSearched {
	id: number;
	name: string;
	price: string | number;
	stars: number;
	punts: number;
}

const CardServicesSearched: FC<ICardServicesSearched> = ({
	id,
	name,
	price,
	stars,
	punts,
}) => {

	return (
		<div className=" h-96 border flex flex-col justify-between border-gray-E5E9">
			<div></div>
			<div className="px-8 py-4">
				<h4 className="font-normal text-base">{name}</h4>
				<span className="font-bold text-lg">{price}</span>
				<div className="flex">
					<span className="flex">
                        {}
						<AiOutlineStar className="text-yellow-rating" />
						<AiOutlineStar className="text-yellow-rating" />
						<AiOutlineStar className="color-yellow-rating" />
						<AiOutlineStar className="color-yellow-rating" />
						<AiOutlineStar className="color-yellow-rating" />
					</span>
					<span>{punts}</span>
				</div>
			</div>
		</div>
	);
};

export default CardServicesSearched;
