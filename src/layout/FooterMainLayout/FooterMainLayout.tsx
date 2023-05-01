import { FC } from 'react';
import {
	FooterContainer,
	InfoFooter,
	ListInfoFooter,
	MiniTitles,
	RecieveInfoContainer,
} from './FooterMainLayoutStyles';

import { optionsFooter } from './constants';
import TextInput from '../../components/Inputs/TextInput';

const FooterMainLayout: FC = () => {
	return (
		<>
			<FooterContainer>
				<InfoFooter>
					{optionsFooter.map(({ title, options }, i) => (
						<div key={i}>
							<MiniTitles>{title}</MiniTitles>
							{options.map((option, i) => (
								<ListInfoFooter key={i}>
									<ul>{option}</ul>
								</ListInfoFooter>
							))}
						</div>
					))}
				</InfoFooter>
				<RecieveInfoContainer>
					<div>
						<span className=" ">Quieres recibir información</span>
						<p>
							Inscribete y recibe lo más relevante de Mr.Job, puedes cancelar el
							servicio cuando quieras.
						</p>
					</div>
					<div>
						<TextInput placeholder="Enter your email" />
					</div>
				</RecieveInfoContainer>
			</FooterContainer>
		</>
	);
};

export default FooterMainLayout;
