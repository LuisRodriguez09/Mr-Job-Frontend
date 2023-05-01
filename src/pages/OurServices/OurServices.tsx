import { FC } from 'react';
import HeaderWhite from '../../components/HeaderWhite';
import AllServices from '../../components/OurServices/AllServices';
import CategoryByServices from '../../components/OurServices/CategoryByServices';
import DiscountPanel from '../../components/OurServices/DiscountPanel';
import SearchBar from '../../components/OurServices/SearchBar';
import SearchedByZone from '../../components/OurServices/SearchedByZone';
import FooterMainLayout from '../../layout/FooterMainLayout';

const OurServices: FC = () => {
	return (
		<div>
			<HeaderWhite />
			<div className="px-28">
				<DiscountPanel />
				<SearchBar />
				<CategoryByServices />
				<SearchedByZone />
				<AllServices />
			</div>
			<FooterMainLayout/>
		</div>
	);
};

export default OurServices;
