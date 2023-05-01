import { FC } from 'react';
import HeaderProfile from '../../modules/Profile/HeaderProfile';
import InfoProfile from '../../modules/Profile/InfoProfile';
import LeftPanelProfile from '../../modules/Profile/LeftPanelProfile/LeftPanelProfile';
import FooterMainLayout from '../FooterMainLayout';

const Profile: FC = () => {
	return (
		<div className='flex flex-col'>
			<div className="px-28 pt-5">
				<HeaderProfile />
				<div className="flex mt-16">
					<LeftPanelProfile />
					<InfoProfile />
				</div>
			</div>
			<FooterMainLayout />
		</div>
	);
};

export default Profile;
