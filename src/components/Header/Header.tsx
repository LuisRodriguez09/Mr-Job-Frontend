import React from "react";
import Button from "../Inputs/Button";
import {
	LogoHeader,
	NavbarHeader,
	NavbarLiOptions,
	NavbarOptionsContainer,
} from "./HeaderStyles";

const Header = () => {
	return (
		<NavbarHeader>
			<LogoHeader
				src="https://nccid.ca/wp-content/uploads/sites/2/2015/03/generic-logo.jpg"
				alt="Logo Mr Job"
			/>
			<NavbarOptionsContainer>
				<NavbarLiOptions>Inicio</NavbarLiOptions>
				<NavbarLiOptions>Nuestros servicios</NavbarLiOptions>
				<NavbarLiOptions>Directorio</NavbarLiOptions>
				<NavbarLiOptions>Login</NavbarLiOptions>
				<NavbarLiOptions>
					<Button outline={true}>Crear cuenta</Button>
				</NavbarLiOptions>
			</NavbarOptionsContainer>
		</NavbarHeader>
	);
};

export default Header;
