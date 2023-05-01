import { FC } from 'react';
import Notifications from '../../modules/NotificationsProfile/Notifications/Notifications';
import HeaderProfile from '../../modules/Profile/HeaderProfile';
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile';
import FooterMainLayout from '../FooterMainLayout';

const NotificationsProfile: FC = () => {
	return (
		<div className="flex flex-col">
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<Notifications />
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default NotificationsProfile;
