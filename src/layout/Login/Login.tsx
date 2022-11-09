import { gapi } from 'gapi-script';
import { FC, useEffect } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Inputs/Button';
import TextInput from '../../components/Inputs/TextInput';
import TextRedirect from '../../components/TextRedirect';
import Welcome from '../Welcome';
import {
	BoxField,
	FormContainer,
	HaveAccountText,
	LabelField,
	LoginSide,
	LoginViewContainer,
	SubTitleLogin,
	TitleLogin,
} from './LoginStyles';
import ImageForgotPassword from '../../images/pass.png';

const Login: FC = () => {
	const clientId: string =
		process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID !== undefined
			? process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID
			: '';

	const navigate = useNavigate();

	useEffect(() => {
		const start: any = () => {
			gapi.client.init({
				clientId,
				scope: '',
			});
		};
		gapi.load('client:auth2', start);
	});

	const responseGoogle = (response: any): void => {
		console.log(response);
	};

	return (
		<LoginViewContainer>
			<Welcome img={ImageForgotPassword} />
			<LoginSide>
				<div>
					<TitleLogin>Iniciar sesión</TitleLogin>
					<SubTitleLogin>
						Inicia sesión y ten control total de tu cuenta.
					</SubTitleLogin>
				</div>
				<FormContainer>
					<BoxField>
						<LabelField>Correo electronico o número de teléfono</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Contraseña</LabelField>
						<TextInput />
					</BoxField>
					<TextRedirect
						align="right"
						onClick={() => navigate('/forgot-password')}
					>
						Olvidé mi contraseña
					</TextRedirect>
					<BoxField>
						<LabelField></LabelField>
						<Button size="full">Iniciar sesión</Button>
					</BoxField>
					<HaveAccountText>
						¿No tienes una cuenta?{' '}
						<TextRedirect onClick={() => navigate('/register')}>
							Registrarme
						</TextRedirect>
					</HaveAccountText>
					<GoogleLogin
						clientId={clientId}
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={'single_host_origin'}
					/>
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default Login;
