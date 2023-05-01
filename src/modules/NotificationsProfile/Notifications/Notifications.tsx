import { FC } from 'react';
import Notification from '../Notification/Notification';
import { notificationsArr } from './mocks';

const Notifications: FC = () => {
	return (
		<div className="w-10/12 pl-6">
            <h1 className='font-bold text-6xl'>Notificaciones</h1>
			{notificationsArr.map(({ id, message, status, typeNotification }) => (
				<Notification
					key={id}
					id={id}
					message={message}
					status={status}
					typeNotification={typeNotification}
				/>
			))}
		</div>
	);
};

export default Notifications;
