import styled from 'styled-components';

export const InfoLayoutContainer = styled.div`
	display: flex;
	height: 80vh;
	& > div {
		width: 50%;
		display: flex;
		@media (max-width: 640px) {
			width: 100%;
		}
	}
	& > div:nth-child(2) {
		@media (max-width: 640px) {
			display: none;
		}
	}

	@media (max-width: 1000px) {
		height: auto;
		margin: 50px 0;
	}
`;

export const LeftContentMainInfo = styled.div`
	flex-direction: column;
	justify-content: center;
	& > h1 {
		width: 524px;
		height: 160px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 700;
		font-size: 64px;
		line-height: 80px;
		@media (max-width: 1000px) {
			width: 100%;
			display: flex;
			align-items: center;
			text-align: center;
		}
	}
	& > p {
		width: 524px;
		height: 81px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;

		@media (max-width: 768px) {
			display: flex;
			align-self: center;
		}
	}
	& > div {
		margin: 16px 0;
		@media (max-width: 768px) {
			display: flex;
			flex-direction: column;
			align-self: center;
		}
		& > button {
			margin-right: 16px;
			@media (max-width: 768px) {
				margin: 0 auto;
				margin: 10px 0;
			}
		}
	}
`;

export const RightContentMainInfo = styled.div`
	color: blue;
	margin-top: 100px;
	& > div {
		width: 272px;
		height: 384px;
		border-radius: 16px;
	}
	& > div:first-child {
		background: #bcc3ff;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(-13.42deg);
		z-index: 1;
	}
	& > div:nth-child(2) {
		background: #587189;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(-3.52deg);
		z-index: 2;
	}
	& > div:nth-child(3) {
		background: #ffc971;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		border-radius: 16px;
		transform: rotate(7.5deg);
	}
`;
