import styled from 'styled-components';

export const NavbarHeader = styled.nav`
	display: flex;
	background: #181f25;
	justify-content: space-around;
	padding: 10px 0px;
`;

export const LogoHeader = styled.img`
	height: 50px;
	align-self: center;
`;

export const NavbarOptionsContainer = styled.div`
	color: white;
	display: flex;
	list-style: none;
	padding: 12px 9px;
`;

export const NavbarLiOptions = styled.li`
	cursor: pointer;
	margin: 0 1rem;
	display: flex;
    flex-direction: column;
    justify-content: center;
}
`;
