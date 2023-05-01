import { FC } from 'react';
import HeaderProfile from '../../modules/Profile/HeaderProfile';
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile';
import AddService from '../../modules/ServicesProfile/AddService';
import FooterMainLayout from '../FooterMainLayout';

const ServicesProfile: FC = () => {
    return (
		<div className="flex flex-col min-h-screen justify-between">
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<AddService/>
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default ServicesProfile;
