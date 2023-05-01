import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { StyledTextInput } from './TextInputStyles';

export interface IInputTextProps {
	placeholder?: string;
	icon?: string;
	className?: string;
	register?: UseFormRegister<any>;
	name?: string;
}

const TextInput: FC<IInputTextProps> = ({
	placeholder,
	className,
	register,
	name,
}) => {
	return register && name ? (
		<StyledTextInput
			className={className}
			placeholder={placeholder}
			type="text"
			{...register(name)}
		/>
	) : (
		<StyledTextInput
			className={className}
			placeholder={placeholder}
			type="text"
		/>
	);
};

export default TextInput;
