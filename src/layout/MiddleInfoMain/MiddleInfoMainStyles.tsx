import styled from 'styled-components';

export const TitleMiddleInfo = styled.h1`
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 64px;
	line-height: 80px;
`;

export const ContainerMiddleInfo = styled.div`
	display: flex;
	height: 380px;
	& > div {
		width: 50%;
		@media (max-width: 640px) {
			width: 100%;
		}
	}
	& > p {
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 27px;
	}
`;

export const EmptyPanelStyles = styled.div`
	display: flex;
	align-self: end;
	height: 250px;
	background: #dde1e6;
	border-radius: 16px;
	width: 100%;
	@media (max-width: 640px) {
		display: none;
	}
`;
