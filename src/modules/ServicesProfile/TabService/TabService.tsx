import { FC, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import FormAddService from '../FormAddService';

interface ITabService {
	infoService: {
		nameBussiness: string;
	};
}

const TabService: FC<ITabService> = ({ infoService }) => {
	const [showService, setShowService] = useState(false);
	const { nameBussiness } = infoService;
	return (
		<>
			<div
				className={`flex h-12 items-center p-2 rounded border-gray-panel ${
					showService ? 'border-2 border-b-0' : 'my-2 shadow-lg'
				} justify-between`}
			>
				<div className="flex">
					<p className="font-bold">{nameBussiness}</p>{' '}
					<span className="px-1"> (5 servicios actualmente)</span>
				</div>
				<RiArrowDropDownLine
					className="text-4xl cursor-pointer"
					onClick={() => setShowService(!showService)}
				/>
			</div>
			{showService && (
				<div className="border-2 border-gray-panel p-2 border-t-0">
					<FormAddService infoService={infoService} />
				</div>
			)}
		</>
	);
};

export default TabService;
