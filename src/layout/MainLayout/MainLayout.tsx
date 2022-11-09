import React, { FC } from 'react';
import Header from '../../components/Header';
import MainInfoLayout from '../MainInfoLayout';
import { MainLayoutContainer } from './MainLayoutStyles';

const MainLayout: FC = () => {
	return (
		<MainLayoutContainer>
			<Header />
			<MainInfoLayout />
		</MainLayoutContainer>
	);
};

export default MainLayout;
