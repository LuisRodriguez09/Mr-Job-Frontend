interface ITypeSelect {
	id: number;
	value: string;
	name: string;
	selected?: boolean;
}

export const optionsTypeService: ITypeSelect[] = [
	{
		id: 0,
		value: '',
		name: 'Select an option',
		selected: true,
	},
	{
		id: 1,
		value: 'serviciosdelhogar',
		name: 'Servicios del Hogar',
	},
];

export const optionsRangeServoce: ITypeSelect[] = [
	{
		id: 0,
		value: '',
		name: 'Select an option',
		selected: true,
	},
	{
		id: 1,
		value: '5',
		name: '5 Kilometros',
	},
	{
		id: 2,
		value: '10',
		name: '10 Kilometros',
	},
	{
		id: 3,
		value: '15',
		name: '15 Kilometros',
	},
	{
		id: 4,
		value: '20',
		name: '20 Kilometros',
	},
];

export const optionsServiceOnHolidays: ITypeSelect[] = [
	{
		id: 0,
		value: 'si',
		name: 'Sí',
		selected: true,
	},
	{
		id: 1,
		value: 'no',
		name: 'No',
	},
];

export const optionsServiceHours: ITypeSelect[] = [
	{
		id: 0,
		value: '',
		name: 'Select an option',
		selected: true,
	},
	{
		id: 1,
		value: '7a3',
		name: '07:00 - 12:00',
	},
	{
		id: 2,
		value: '9a2',
		name: '09:00 - 14:00',
	},
];
