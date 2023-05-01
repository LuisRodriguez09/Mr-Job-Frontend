import { FC } from 'react';
import { useSnapCarousel } from 'react-snap-carousel';
import DATA_MOCKS_ASSIGNATIONS from '../Assignations/mocks.json';
import CardAssignation from '../CardAssignation';
import { getColorAssignation } from './utils';

interface IAssignationsCarousel {
	status: string;
}

const AssignationsCarousel: FC<IAssignationsCarousel> = ({ status }) => {
	const { scrollRef } = useSnapCarousel();

	return (
		<div className="py-8">
			<div className="flex">
				<span
					className={`bg-${getColorAssignation(status)} rounded-full w-4 h-4`}
				></span>
				<h1 className="text-2xl font-bold pl-2">{status}</h1>
			</div>

			<ul className="flex" ref={scrollRef}>
				{DATA_MOCKS_ASSIGNATIONS.DATA.map(
					({ idAssignation, idProcess, name }, i) => (
						<li key={idProcess}>
							<CardAssignation
								status={status}
								key={idAssignation}
								name={name}
								idProcess={idProcess}
							/>
						</li>
					)
				)}
			</ul>
		</div>
	);
};

export default AssignationsCarousel;
