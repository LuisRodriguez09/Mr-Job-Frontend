import styled from 'styled-components';

export const FooterContainer = styled.div`
	background: #181f25;
	color: white;
	width: 100%;
	height: 362px;
	@media (max-width: 768px) {
		height: auto;
	}

	padding: 24px;
`;

export const InfoFooter = styled.div`
	display: flex;
	& > div {
		width: 25%;
	}
`;

export const ListInfoFooter = styled.li`
	list-style: none;
	& > ul {
		width: 50%;
		height: auto;
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 18px;
		margin: 8px 0;
	}
`;

export const MiniTitles = styled.span`
	width: 74px;
	height: 27px;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
`;

export const RecieveInfoContainer = styled.div`
	width: 100%;
	height: 81px;
	background: #9bafbf;
	border-radius: 12px;
	display: flex;
	padding: 20px;

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}

	& > div {
		color: #181f25;
		width: 50%;
		@media (max-width: 768px) {
			width: 100%;
		}
		& > span {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 24px;
		}
		& > p {
			font-family: 'Roboto';
			font-style: normal;
			font-weight: 400;
			font-size: 14px;
			line-height: 21px;
		}
		& > input {
			color: white;
			background: #485d70;
			border-radius: 12px;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 0px 6px 0px 24px;
			gap: 8px;

			width: 100%;
			height: 48px;
		}
	}
`;
