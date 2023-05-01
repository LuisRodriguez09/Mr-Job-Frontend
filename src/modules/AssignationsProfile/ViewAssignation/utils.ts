import { IAssignation, IAssignations } from '../types';

export const getTypeAssignation = (
	data: IAssignations,
	status: string
): IAssignation[] => {
	switch (status) {
		case 'Pendientes':
			return data.DATA;
		case 'Garantía':
			return data.WARRANTY;
		case 'Finalizadas':
			return data.FINISHED;
		case 'Canceladas':
			return data.CANCELED;
		default:
			return data.DATA;
	}
};
