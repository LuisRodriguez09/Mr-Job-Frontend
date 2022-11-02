import {
	SubTitleWelcome,
	WelcomeSide,
	WelcomeSideContainer,
	WelcomeTitle,
} from "./WelcomeStyles";

const Welcome = () => {
	return (
		<WelcomeSideContainer>
			<WelcomeSide>
				<WelcomeTitle>Bienvenido a</WelcomeTitle>
				<SubTitleWelcome>
					Donde buscar y dar de alta tu negocio nunca fue tan
					sencillo, unete y disfruta de los mejores servicios, es
					¡Gratis!
				</SubTitleWelcome>
			</WelcomeSide>
		</WelcomeSideContainer>
	);
};

export default Welcome;
