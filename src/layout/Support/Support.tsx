import { FC } from 'react';
import HeaderProfile from '../../modules/Profile/HeaderProfile';
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile';
import SuportProfile from '../../modules/SupportProfile/Support/SuportProfile';
import FooterMainLayout from '../FooterMainLayout';

const Support: FC = () => {
	return (
		<div className="flex flex-col">
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<SuportProfile />
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default Support;
