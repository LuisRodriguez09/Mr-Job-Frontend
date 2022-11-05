import { FC } from "react";
import {
	SubTitleWelcome,
	WelcomeSide,
	WelcomeSideContainer,
	WelcomeTitle,
} from "./WelcomeStyles";

const Welcome: FC<{ title?: string; subtitle?: string }> = ({
	title,
	subtitle,
}) => {
	return (
		<WelcomeSideContainer>
			<WelcomeSide>
				<WelcomeTitle>{title ? title : `Bienvenido a`}</WelcomeTitle>
				<SubTitleWelcome>
					{subtitle
						? subtitle
						: `Donde buscar y dar de alta tu negocio nunca fue tan
					sencillo, unete y disfruta de los mejores servicios, es
					¡Gratis!`}
				</SubTitleWelcome>
			</WelcomeSide>
		</WelcomeSideContainer>
	);
};

export default Welcome;
