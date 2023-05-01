import { FC } from 'react';
import logo from '../../images/logoPrimaryColor-04.png';

const classesUl = 'font-bold px-8'

const HeaderWhite: FC = () => {
	return (
		<header className="h-24 px-28 py-4 flex justify-between items-center">
			<img src={logo} alt="Logo Mr Job" />
			<div>
				<li className='flex '>
					<ul className={classesUl}>Inicio</ul>
					<ul className={classesUl}>Nuestros servicios</ul>
					<ul className={classesUl}>Directorio</ul>
					<ul className={classesUl}>Mis servicios</ul>
					<ul className={classesUl}>Configuración</ul>
					<ul className={classesUl}>Cerrar sesión</ul>
				</li>
			</div>
		</header>
	);
};

export default HeaderWhite;
