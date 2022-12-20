import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Inputs/Button';
import {
	LogoHeader,
	NavbarHeader,
	NavbarLiOptions,
	NavbarOptionsContainer,
} from './HeaderStyles';
import LogoPrimaryColor from '../../images/logoWhite.png';

const Header: FC = () => {
	const navigate = useNavigate();

	return (
		<NavbarHeader>
			<LogoHeader src={LogoPrimaryColor} alt="Logo Mr Job" />
			<NavbarOptionsContainer>
				<NavbarLiOptions onClick={() => navigate('./login')}>
					Inicio
				</NavbarLiOptions>
				<NavbarLiOptions>Nuestros servicios</NavbarLiOptions>
				<NavbarLiOptions>Directorio</NavbarLiOptions>
				<NavbarLiOptions>Login</NavbarLiOptions>
				<NavbarLiOptions>
					<Button outline={true} color="dark">
						Crear cuenta
					</Button>
				</NavbarLiOptions>
			</NavbarOptionsContainer>
		</NavbarHeader>
	);
};

export default Header;
