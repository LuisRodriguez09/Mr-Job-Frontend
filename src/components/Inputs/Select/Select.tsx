import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

export interface ISelectProps {
	options: Array<{
		id: string | number;
		name: string;
		value: string;
		selected?: boolean;
	}>;
	register?: UseFormRegister<any>;
	name?: string;
}

const classesSelect = 'h-14 border-blue-border-input border rounded-xl bg-white-input';

const Select: FC<ISelectProps> = ({ options, name, register }) => {
	return register && name ? (
		<select {...register(name)} className={classesSelect}>
			{options.map(({ id, name, value, selected }) => (
				<option key={id} value={value} selected={selected && true}>
					{name}
				</option>
			))}
		</select>
	) : (
		<select className={classesSelect}>
			{options.map(({ id, name, value, selected }) => (
				<option key={id} value={value} selected={selected && true}>
					{name}
				</option>
			))}
		</select>
	);
};
export default Select;
