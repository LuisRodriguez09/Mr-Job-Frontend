import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Inputs/Button";
import TextInput from "../../components/Inputs/TextInput";
import {
	BoxField,
	FormContainer,
	HaveAccountText,
	LabelField,
	LoginSide,
	LoginViewContainer,
	SubTitleLogin,
	TitleLogin,
} from "../Login/LoginStyles";
import Welcome from "../Welcome";

const RegistrationForm = () => {
	const clientId: string =
		process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID !== undefined
			? process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID
			: "";

	const navigate = useNavigate();

	useEffect(() => {
		const start = () => {
			gapi.client.init({
				clientId: clientId,
				scope: "",
			});
		};
		gapi.load("client:auth2", start);
	});

	const responseGoogle = (response: any) => {
		console.log(response);
	};

	return (
		<LoginViewContainer>
			<Welcome />
			<LoginSide>
				<div>
					<TitleLogin>Unirme como Job</TitleLogin>
					<SubTitleLogin>
						Si tienes un negocio y quieres aumentar tus ventas,
						unete como Job y disfruta de tus clientes. Quiero buscar
						un servicio
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
						¿No tienes una cuenta?{" "}
						<span onClick={() => navigate("/register")}>
							Registrarme
						</span>
					</HaveAccountText>
					<GoogleLogin
						clientId={clientId}
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
					/>
				</FormContainer>
			</LoginSide>
		</LoginViewContainer>
	);
};

export default RegistrationForm;
