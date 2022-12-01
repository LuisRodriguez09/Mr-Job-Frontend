import styled from 'styled-components';

export const InfoLayoutContainer = styled.div`
	display: flex;
	height: 80vh;
	& > div {
		width: 50%;
		display: flex;
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
	}
	& > p {
		width: 524px;
		height: 81px;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
	}
	& > div {
		margin: 16px 0;
		& > button {
			margin-right: 16px;
		}
	}
`;

export const RightContentMainInfo = styled.div`
	color: blue;
	& > div {
		width: 272px;
		height: 384px;
		border-radius: 16px;
		position: absolute;
	}
	& > div:first-child {
		background: #bcc3ff;

		left: 751px;
		top: 143.13px;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(-13.42deg);
		z-index: 1;
	}
	& > div:nth-child(2) {
		left: 924px;
		top: 156.71px;

		background: #587189;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);
		transform: rotate(-3.52deg);
		z-index: 2;
	}
	& > div:nth-child(3) {
		left: 1134.14px;
		top: 196px;
		background: #ffc971;
		box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);

		transform: rotate(7.5deg);
	}
`;
