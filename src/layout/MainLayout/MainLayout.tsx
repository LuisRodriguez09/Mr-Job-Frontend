import { FC } from 'react';
import Header from '../../components/Header';
import AddPanelMain from '../AddPanelMain';
import FooterMainLayout from '../FooterMainLayout/FooterMainLayout';
import MainInfoLayout from '../MainInfoLayout';
import MiddleInfoMain from '../MiddleInfoMain';
import { MainLayoutContainer } from './MainLayoutStyles';

const MainLayout: FC = () => {
	return (
		<>
			<Header />
			<MainLayoutContainer>
				<MainInfoLayout />
				<AddPanelMain />
				<MiddleInfoMain />
			</MainLayoutContainer>
			<FooterMainLayout />
		</>
	);
};

export default MainLayout;
