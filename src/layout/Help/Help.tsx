import { FC } from 'react';
import HelpProfile from '../../modules/HelpProfile/HelpProfile';
import HeaderProfile from '../../modules/Profile/HeaderProfile';
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile';
import FooterMainLayout from '../FooterMainLayout';

const Help: FC = () => {
	return (
		<div className="flex flex-col">
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<HelpProfile  />
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default Help;
