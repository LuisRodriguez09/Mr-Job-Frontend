import { FC } from 'react';
import Button from '../../components/Inputs/Button';
import {
	InfoLayoutContainer,
	LeftContentMainInfo,
	RightContentMainInfo,
} from './MainInfoLayoutStyles';

const MainInfoLayout: FC = () => {
	return (
		<InfoLayoutContainer>
			<LeftContentMainInfo>
				<h1>Obten un 50% en tu primer servicio</h1>
				<p className="text-center sm:text-left">
					Unete a Mr.Job y encuentra los meres servicios cerca de ti, con
					profesionales a tu alcance busca o da de alta tu negocios en dos
					simples pasos.
				</p>
				<div>
					<Button color="primary">Buscar servicios</Button>
					<Button outline={true} size="medium">
						Dar de alta mi negocio
					</Button>
				</div>
			</LeftContentMainInfo>
			<RightContentMainInfo>
				<div></div>
				<div></div>
				<div></div>
			</RightContentMainInfo>
		</InfoLayoutContainer>
	);
};

export default MainInfoLayout;
