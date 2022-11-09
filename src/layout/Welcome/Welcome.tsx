/* eslint no-unneeded-ternary: "off" */
import { FC } from 'react';
import {
	SubTitleWelcome,
	WelcomeImage,
	WelcomeSide,
	WelcomeSideContainer,
	WelcomeTitle,
} from './WelcomeStyles';

const Welcome: FC<{ title?: string; subtitle?: string; img?: string }> = ({
	title,
	subtitle,
	img,
}) => {
	return (
		<WelcomeSideContainer>
			<WelcomeSide>
				<WelcomeTitle>
					{title !== undefined ? title : `Bienvenido a`}
				</WelcomeTitle>
				<SubTitleWelcome>
					{subtitle !== undefined
						? subtitle
						: `Donde buscar y dar de alta tu negocio nunca fue tan
					sencillo, unete y disfruta de los mejores servicios, es
					¡Gratis!`}
				</SubTitleWelcome>
				{img && <WelcomeImage src={img} alt="" />}
			</WelcomeSide>
		</WelcomeSideContainer>
	);
};

export default Welcome;
