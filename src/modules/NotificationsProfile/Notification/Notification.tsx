import { FC } from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { getColorStatus } from './utils';

interface INotification {
	id: number | string;
	message: string;
	status: string;
	typeNotification: string;
	subtext?: string;
}

const Notification: FC<INotification> = ({
	id,
	message,
	status,
	typeNotification,
	subtext,
}) => {
	return (
		<div className="rounded border border-gray-EAEC flex flex-col w-full my-4">
			<div className="flex justify-between border-b p-4 border-gray-EAEC">
				<div className="flex items-center">
					<span className="flex items-center justify-center h-8 w-8 bg-purple-F4EB rounded-full">
						<IoIosNotificationsOutline className="text-xl" />
					</span>
					<h1 className="font-bold text-lg pl-4">{typeNotification}</h1>
				</div>
				<span>
					<input type="radio" />
				</span>
			</div>
			<div className="p-4 flex justify-between">
				<div className="flex flex-col">
					<div className="flex">
						<h2 className="text-3xl font-bold">{id}</h2>
						<p className="text-gray-6670 self-end pl-1">
							{subtext || 'ID de asignación'}
						</p>
					</div>
					<p className="text-gray-6670 py-2">{message}</p>
				</div>
				<div>
					<span
						className={`rounded-2xl bg-${getColorStatus(
							status
						)} text-white py-1 px-2 text-xs`}
					>
						{status}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Notification;
