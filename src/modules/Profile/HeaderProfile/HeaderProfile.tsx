import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoPrimaryColor from '../../../images/logoPrimaryColor.png';

const HeaderProfile: FC = () => {
	const navigate = useNavigate();

	return (
		<header className="w-full flex justify-between">
			<img src={LogoPrimaryColor} alt="Logo Mr Job" />
			<nav className="flex">
				<p className="px-6 cursor-pointer">Inicio</p>
				<p className="px-6 cursor-pointer">Nuestro Servicios</p>
				<p className="px-6 cursor-pointer">Directorio</p>
				<p>|</p>
				<p
					className="px-6 font-bold cursor-pointer"
					onClick={() => navigate('/login')}
				>
					Cerrar sesión
				</p>
			</nav>
		</header>
	);
};

export default HeaderProfile;
