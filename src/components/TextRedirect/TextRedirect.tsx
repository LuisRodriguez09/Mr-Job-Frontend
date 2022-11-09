import { FC, ReactNode } from 'react';
import { typesAlignation } from '../../theme/theme';
import { TextRedirectStyles } from './TextRedirectStyles';

interface ITextRedirectProps {
	children: ReactNode;
	onClick: () => any;
	align?: typesAlignation;
}

const TextRedirect: FC<ITextRedirectProps> = ({ children, onClick, align }) => {
	return (
		<TextRedirectStyles align={align} onClick={() => onClick()}>
			{children}
		</TextRedirectStyles>
	);
};

export default TextRedirect;
