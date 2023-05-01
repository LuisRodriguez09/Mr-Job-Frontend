import styled from 'styled-components';

export const ContainerNeedAService = styled.div`
	background: #768fa7;
	border-radius: 40px;
	padding: 80px 50px;
	width: 80%;
	height: 489px;
	display: flex;
	margin: -30px;
	& > div:first-child {
		width: 70%;
		@media (max-width: 640px) {
			width: 100%;
		}
	}
`;

export const ContainerFreeMonth = styled.div`
	background: #e2e8f0;
	border-radius: 40px;
	height: 450px;
	padding: 80px 50px;
	& > div {
		width: 50%;
		@media (max-width: 768px) {
			width: 100%;
		}
		display: flex;
		justify-content: space-evenly;
		height: 100%;
		& > p {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 18px;
			line-height: 27px;

			display: flex;
			align-items: center;
		}
		& > div {
			width: 80%;
		}
		& > p {
			width: 60%;
		}
	}
`;

export const TitleNeedAService = styled.h1`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 56px;
	line-height: 70px;
`;

export const RightContentAddService = styled.div`
	display: flex;
	@media (max-width: 768px) {
		display: none;
	}

	& > div {
		width: 224px;
		height: 291px;
		border-radius: 16px;
		position: relative;
	}
	& > div:first-child {
		background: #b4cded;

		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(-13.42deg);
		z-index: 3;
		left: 100px;
		top: 100px;
	}
	& > div:nth-child(2) {
		background: #ffc971;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(4.06deg);
		top: -100px;
		z-index: 2;
	}
	& > div:nth-child(3) {
		background: #fe6d73;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		right: 100px;
		transform: rotate(9.64deg);
	}
`;

export const ContainerNameServices = styled.div`
	@media (max-width: 1500px) {
		display: none;
	}
	color: white;
	background: #181f25;
	display: flex;
	flex-direction: column;
	padding: 70px 10px 15px 10px;
	margin: -28px auto;
	z-index: -3;

	& > h3 {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 30px;
	}
	& > div > li {
		display: inline;
		margin: 0 10px;
		list-style: none;
		font-family: 'Roboto';
		font-style: normal;
		line-height: 27px;
	}
`;

export const ImageWomanStyles = styled.img`
	@media (max-width: 768px) {
		display: none;
	}
`;
