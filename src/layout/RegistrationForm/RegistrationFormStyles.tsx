import styled from 'styled-components';

export const TitleRegister = styled.h1`
	width: 526px;
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

export const SubTitleRegister = styled.p`
	position: absolute;
	width: 526px;
	height: 54px;
	padding: 15px 0;

	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	color: #52525b;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 120px 0;
`;

export const OrRegisterWithStyles = styled.div`
	display: flex;
	margin: 10px 0;
	& > hr {
		background-color: #94a3b8;
		height: 1px;
		width: 37%;
	}
`;
