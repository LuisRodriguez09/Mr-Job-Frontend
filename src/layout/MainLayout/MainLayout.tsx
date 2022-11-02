import React from "react";
import Header from "../../components/Header";
import MainInfoLayout from "../MainInfoLayout";
import { MainLayoutContainer } from "./MainLayoutStyles";

const MainLayout = () => {
	return (
		<MainLayoutContainer>
			<Header />
			<MainInfoLayout />
		</MainLayoutContainer>
	);
};

export default MainLayout;
