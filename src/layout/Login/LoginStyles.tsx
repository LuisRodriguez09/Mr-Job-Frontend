import styled from 'styled-components';
import '@fontsource/poppins';

export const LoginViewContainer = styled.div`
	height: 100vh;
	display: flex;
	font-family: 'Poppins';

	& > div {
		width: 50%;
	}

	@media (max-width: 1000px) {
		flex-direction: column;
		& > div {
			width: 100%;
			margin: 0;
		}
	}
`;

export const LoginSide = styled.div`
	display: flex;
	flex-direction: column;
	margin: 100px 174px;
`;

export const TitleLogin = styled.h1`
	width: 323px;
	height: 62px;
	left: 812px;
	top: 156px;
	font-style: normal;
	font-weight: 600;
	font-size: 52px;
	line-height: 62px;

	letter-spacing: -2px;

	color: #090914;
`;

export const SubTitleLogin = styled.p`
	width: 461px;
	height: 30px;
	padding: 15px 0;

	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	color: #52525b;

	@media (max-width: 1000px) {
		width: 100%;
	}
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1000px) {
		& > div {
			padding: 16px;
		}
	}
`;

export const LabelField = styled.label`
	font-weight: bold;
	margin: 11px 0;
`;

export const BoxField = styled.div`
	display: flex;
	flex-direction: column;
`;

export const HaveAccountText = styled.p`
	text-align: center;
	margin: 16px 0;
	& > span {
		cursor: pointer;
		color: #2f81cb;
	}
`;

export const TextRedirectContainer = styled.div`
	@media (max-width: 1000px) {
		padding: 16px;
	}
`;
