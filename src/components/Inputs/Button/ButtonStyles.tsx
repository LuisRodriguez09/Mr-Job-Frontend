import { ReactNode } from 'react';
import styled from 'styled-components';
import {
	getColorTypeButton,
	getSizeTypeButton,
	typesOptions,
} from '../../../theme/theme';

interface StyledButtonProps {
	type?: typesOptions;
	outline?: ReactNode;
	size?: ReactNode;
}

export const StyledButton = styled.button<StyledButtonProps>`
	cursor: pointer;
	background-color: ${({ color, outline }) =>
		outline ? 'white' : getColorTypeButton(color ?? '')};
	border-radius: 10px;
	border: ${({ outline, color }) =>
		outline || color === 'dark' ? '1.5px solid #181F25' : 'none'};
	color: ${({ outline }) => (outline ? '#164066' : 'white')};
	${({ size }) => getSizeTypeButton(size)}
`;
