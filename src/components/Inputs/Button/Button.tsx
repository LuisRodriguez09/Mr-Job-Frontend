import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';
import { typesOptions } from '../../../theme/theme';
import { StyledButton } from './ButtonStyles';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
	children: ReactNode;
	color?: typesOptions;
	outline?: ReactNode;
	size?: ReactNode;
}

const Button: FC<IButtonProps> = ({ children, color, outline, size }) => {
	return (
		<StyledButton color={color} outline={outline} size={size}>
			{children}
		</StyledButton>
	);
};

export default Button;
