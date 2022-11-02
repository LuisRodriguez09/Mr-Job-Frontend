import React from "react";
import Button from "../../components/Inputs/Button";
import { InfoLayoutContainer } from "./MainInfoLayoutStyles";

const MainInfoLayout = () => {
	return (
		<InfoLayoutContainer>
			<div>
				<h1>Obten un 50% en tu primer servicio</h1>
			</div>
			<div>
				Unete y encuentra + de 200 Servicios cerca de ti, o da de alta
				tu negocio y haz crecer tu negocio
			</div>
			<div>
				<Button color="primary">Buscar servicios</Button>
				<Button outline={true} size="medium">
					Dar de alta mi negocio
				</Button>
			</div>
		</InfoLayoutContainer>
	);
};

export default MainInfoLayout;
