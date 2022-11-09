import styled from 'styled-components';
import { typesAlignation } from '../../theme/theme';

interface IStyledTextRedirectProps {
	align?: typesAlignation;
}

export const TextRedirectStyles = styled.span<IStyledTextRedirectProps>`
	cursor: pointer;
	color: #2f81cb;
	text-align: ${({ align }) => align};
`;
