import { ReactNode } from 'react';

export type typesOptions =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'dark';
export type typesAlignation = 'right' | 'left' | 'center';
export type typesColorsButtons = '#181F25' | 'black';

export const getColorTypeButton: any = (color: typesOptions) => {
	switch (color) {
		case 'primary':
			return '#181F25';
		case 'dark':
			return '#181F25';
		default:
			return 'black';
	}
};

export const getSizeTypeButton: any = (size: ReactNode) => {
	switch (size) {
		case 'small':
			return 'width: 179px; height: 56px;';
		case 'medium':
			return 'width: 263px; height: 56px;';
		case 'full':
			return 'width: 100%; height: 56px;';
		default:
			return 'width: 179px; height: 56px;';
	}
};
