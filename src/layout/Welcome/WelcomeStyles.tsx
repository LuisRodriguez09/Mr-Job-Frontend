import styled from 'styled-components';

export const WelcomeSideContainer = styled.div`
	background-color: #587189;
	color: white;
`;

export const WelcomeSide = styled.div`
	display: flex;
	flex-direction: column;
	margin: 156px 174px;
	@media (max-width: 850px) {
		margin: 148px 16px 44px 16px;
	}
`;

export const SubTitleWelcome = styled.p`
	width: 419px;
	height: 81px;
	margin: 18px 0;

	font-family: 'Roboto';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;
	@media (max-width: 1000px) {
		display: none;
	}
`;

export const WelcomeTitle = styled.h1`
	width: 423px;
	height: auto;
	font-family: 'Roboto';
	font-style: normal;
	font-weight: 700;
	font-size: 64px;
	line-height: 80px;
	@media (max-width: 1000px) {
		width: 100%;
		text-align: center;
	}
`;

export const WelcomeImage = styled.img`
	width: 598px;
	height: 598px;
	margin: 0 auto;
	@media (max-width: 1000px) {
		display: none;
	}
`;
