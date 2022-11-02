import Button from "../../components/Inputs/Button";
import TextInput from "../../components/Inputs/TextInput";
import Welcome from "../Welcome";
import {
	BoxField,
	FormContainer,
	HaveAccountText,
	LabelField,
	LoginSide,
	LoginViewContainer,
	SubTitleLogin,
	TitleLogin,
} from "./LoginStyles";

const Login = () => {
	return (
		<LoginViewContainer>
			<Welcome />
			<LoginSide>
				<div>
					<TitleLogin>Iniciar sesión</TitleLogin>
					<SubTitleLogin>
						Inicia sesión y ten control total de tu cuenta.
					</SubTitleLogin>
				</div>
				<FormContainer>
					<BoxField>
						<LabelField>
							Correo electronico o número de teléfono
						</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField>Contraseña</LabelField>
						<TextInput />
					</BoxField>
					<BoxField>
						<LabelField></LabelField>
						<Button size="full">Iniciar sesión</Button>
					</BoxField>
					<HaveAccountText>
						¿No tienes una cuenta? <span>Registrarme</span>
					</HaveAccountText>
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default Login;
