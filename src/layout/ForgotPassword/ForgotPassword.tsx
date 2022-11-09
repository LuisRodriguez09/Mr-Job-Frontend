import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Inputs/Button';
import TextInput from '../../components/Inputs/TextInput';
import TextRedirect from '../../components/TextRedirect';
import {
	BoxField,
	FormContainer,
	HaveAccountText,
	LabelField,
	LoginSide,
	LoginViewContainer,
} from '../Login/LoginStyles';
import Welcome from '../Welcome';
import { SubTitleForgot, TitleForgot, TopForgot } from './ForgotPasswordStyles';
import ImageForgotPassword from '../../images/pass.png';

const ForgotPassword: FC = () => {
	const navigate = useNavigate();

	return (
		<LoginViewContainer>
			<Welcome
				title="Oop!"
				subtitle="No te preocupes, tus datos se encuentran protegidos, recuperar tu contraseña es muy sencillo, no te llevará más de 2 minutos."
				img={ImageForgotPassword}
			/>
			<LoginSide>
				<TopForgot>
					<TitleForgot>Olvidé mi contraseña</TitleForgot>
					<SubTitleForgot>
						Escribe el correo electronico con el que te encuentras registrado,
						te enviaremos un enlace para restablecer tu contraseña
					</SubTitleForgot>
				</TopForgot>
				<FormContainer>
					<BoxField>
						<LabelField>Correo electrónico</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField></LabelField>
						<Button size="full">Enviar enlace</Button>
					</BoxField>
					<HaveAccountText>
						¿Recordaste tu contraseña?{' '}
						<TextRedirect onClick={() => navigate('/login')}>
							Iniciar sesión
						</TextRedirect>
					</HaveAccountText>
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default ForgotPassword;
