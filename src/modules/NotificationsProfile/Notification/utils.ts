export const getColorStatus = (status: string): string => {
	switch (status) {
		case 'A tiempo':
			return 'green-a-tiempo';
		case 'Retrasada':
			return 'red-cancelled';
		default:
			return 'green-a-tiempo';
	}
};
