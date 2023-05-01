import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: "Roboto";
		color: #181F25;
		overflow-x: hidden;
	  }
	h1 {
		margin: 0
    }
	p {
		margin: 0
	}
`;

export default GlobalStyle;
