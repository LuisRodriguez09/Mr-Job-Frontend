export const getColorAssignation = (status: string): string => {
	switch (status) {
		case 'Pendientes':
			return 'yellow-pending';
		case 'Finalizadas':
			return 'green-finish';
		case 'Canceladas':
			return 'red-cancelled';
		case 'Garantía':
			return 'purple-warranty';
		default:
			return '';
	}
};
