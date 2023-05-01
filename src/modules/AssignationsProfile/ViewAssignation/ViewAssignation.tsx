import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FooterMainLayout from '../../../layout/FooterMainLayout';
import HeaderProfile from '../../Profile/HeaderProfile';
import LeftPanelProfile from '../../Profile/LeftPanelProfile/LeftPanelProfile';
import CardAssignation from '../CardAssignation';
import { IAssignations } from '../types';
import { getTypeAssignation } from './utils';

const classesLi = 'basis-1/3 p-4';

const ViewAssignation: FC = () => {
	const [assignations, setAssignations] = useState<IAssignations>({
		DATA: [],
		CANCELED: [],
		WARRANTY: [],
		FINISHED: [],
	});
	const { status } = useParams();

	useEffect(() => {
		setAssignations(JSON.parse(localStorage.getItem('assignations') || '{}'));
		console.log(assignations);
	}, []);

	return (
		<div className="flex flex-col">
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<div className="pl-8 pb-8">
						<div>
							<h1 className="text-6xl font-bold py-6">
								Mis asignaciones - {status}
							</h1>
						</div>
						<div>
							<ul className="flex flex-wrap flex-grow-0 flex-shrink-0 basis-1/3">
								{getTypeAssignation(assignations, status || 'Pendientes').map(
									({ idProcess, name }) => (
										<li className={classesLi} key={idProcess}>
											<CardAssignation
												key={idProcess}
												name={name}
												idProcess={idProcess}
												status={status || "Pendientes"}
											/>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default ViewAssignation;
