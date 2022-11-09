import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Inputs/Button';
import {
	LogoHeader,
	NavbarHeader,
	NavbarLiOptions,
	NavbarOptionsContainer,
} from './HeaderStyles';

const Header: FC = () => {
	const navigate = useNavigate();

	return (
		<NavbarHeader>
			<LogoHeader
				src="https://nccid.ca/wp-content/uploads/sites/2/2015/03/generic-logo.jpg"
				alt="Logo Mr Job"
			/>
			<NavbarOptionsContainer>
				<NavbarLiOptions onClick={() => navigate('./login')}>
					Inicio
				</NavbarLiOptions>
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
