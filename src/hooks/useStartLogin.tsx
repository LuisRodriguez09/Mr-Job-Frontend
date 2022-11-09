import { gapi } from 'gapi-script';

export const useStartLogin: string | any = () => {
	const clientId: string =
		process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID !== undefined
			? process.env.REACT_APP_AUTH_GOOGLE_CLIENT_ID
			: '';
	const startGapi: any = () => {
		gapi.client.init({
			clientId,
			scope: '',
		});
	};
	gapi.load('client:auth2', startGapi);
	return { clientId, startGapi };
};
