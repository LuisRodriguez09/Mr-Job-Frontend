import { FC, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Inputs/Button';
import TextInput from '../../components/Inputs/TextInput';
import TextRedirect from '../../components/TextRedirect';
import { useStartLogin } from '../../hooks/useStartLogin';
import {
	BoxField,
	HaveAccountText,
	LabelField,
	LoginSide,
	LoginViewContainer,
} from '../Login/LoginStyles';
import Welcome from '../Welcome';
import {
	SubTitleRegister,
	TitleRegister,
	FormContainer,
	OrRegisterWithStyles,
} from './RegistrationFormStyles';

const RegistrationForm: FC = () => {
	const navigate = useNavigate();

	const { clientId, startGapi } = useStartLogin();

	useEffect(() => {
		startGapi();
	});

	return (
		<LoginViewContainer>
			<Welcome />
			<LoginSide>
				<div>
					<TitleRegister>Unirme como Job</TitleRegister>
					<SubTitleRegister>
						Si tienes un negocio y quieres aumentar tus ventas, unete como Job y
						disfruta de tus clientes.{' '}
						<TextRedirect onClick={() => navigate('./register')}>
							Quiero buscar un servicio
						</TextRedirect>
					</SubTitleRegister>
				</div>
				<FormContainer>
					<BoxField>
						<LabelField>Correo electronico o número de teléfono</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Número de teléfono (Opcional)</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Contraseña</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Especifica el tipo de servicio que ofreces</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Escribe el nombre de tu negocio</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField></LabelField>
						<Button size="full">Iniciar sesión</Button>
					</BoxField>
					<HaveAccountText>
						¿Tienes una cuenta?{' '}
						<TextRedirect onClick={() => navigate('/login')}>
							Iniciar sesión
						</TextRedirect>
					</HaveAccountText>
					<OrRegisterWithStyles>
						<hr />
						O registrate con
						<hr />
					</OrRegisterWithStyles>
					<GoogleLogin
						clientId={clientId}
						buttonText="Login"
						onSuccess={() => navigate('/')}
						onFailure={() => navigate('/')}
						cookiePolicy={'single_host_origin'}
					/>
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default RegistrationForm;
