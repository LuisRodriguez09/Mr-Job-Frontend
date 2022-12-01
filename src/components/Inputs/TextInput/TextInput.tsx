import { FC } from 'react';
import { StyledTextInput } from './TextInputStyles';

export interface IInputTextProps {
	placeholder?: string;
	icon?: string;
}

const TextInput: FC<IInputTextProps> = ({ placeholder }) => {
	return <StyledTextInput placeholder={placeholder} type="text" />;
};

export default TextInput;
