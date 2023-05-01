import { FC, useState } from 'react';
// import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Inputs/Button';
import TextInput from '../../components/Inputs/TextInput';
import TextRedirect from '../../components/TextRedirect';
// import { useStartLogin } from '../../hooks/useStartLogin';
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
	TitleContainer,
} from './RegistrationFormStyles';
import ImageForgotPassword from '../../images/pass.png';

const RegistrationForm: FC = () => {
	const [registerAsJob, setRegisterAsJob] = useState(false);
	const navigate = useNavigate();

	// const { clientId } = useStartLogin();

	// useEffect(() => {
	// 	startGapi();
	// });

	return (
		<LoginViewContainer>
			<Welcome
				img={ImageForgotPassword}
				subtitle="¡CONECTATE CON LOS MEJORES!, El servicio perfecto, con la mejor atención posible. En cualquier lugar y en cualquier momento."
			/>
			<LoginSide>
				<TitleContainer>
					<TitleRegister>Unirme como Job</TitleRegister>
					<SubTitleRegister>
						Si tienes un negocio y quieres aumentar tus ventas, unete como Job y
						disfruta de tus clientes.{' '}
						<TextRedirect onClick={() => setRegisterAsJob(!registerAsJob)}>
							{registerAsJob ? 'Quiero buscar un servicio' : 'Tengo un negocio'}
						</TextRedirect>
					</SubTitleRegister>
				</TitleContainer>
				<FormContainer>
					<BoxField>
						<LabelField>Correo electronico o número de teléfono</LabelField>
						<TextInput />
					</BoxField>
					{registerAsJob && (
						<BoxField>
							<LabelField>Número de teléfono (Opcional)</LabelField>
							<TextInput />
						</BoxField>
					)}
					<BoxField>
						<LabelField>Contraseña</LabelField>
						<TextInput />
					</BoxField>
					{registerAsJob && (
						<>
							<BoxField>
								<LabelField>
									Especifica el tipo de servicio que ofreces
								</LabelField>
								<TextInput />
							</BoxField>
							<BoxField>
								<LabelField>Escribe el nombre de tu negocio</LabelField>
								<TextInput />
							</BoxField>
						</>
					)}
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
					{/* <GoogleLogin
						clientId={clientId}
						buttonText="Login"
						onSuccess={() => navigate('/')}
						onFailure={() => navigate('/')}
						cookiePolicy={'single_host_origin'}
					/> */}
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default RegistrationForm;
