import styled from 'styled-components';

export const TopForgot = styled.div`
	display: flex;
	flex-direction: column;
	@media (max-width: 1000px) {
		padding: 16px;
	}
`;

export const TitleForgot = styled.h1`
	margin: 10px 0;
	@media (max-width: 800px) {
		width: none;
		font-size: 32px;
		margin: 12px 16px;
	}
`;

export const SubTitleForgot = styled.p`
	width: 461px;
	height: 90px;
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
