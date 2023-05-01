export const useLocalStorageArrays: any = (key: string, data: any) => {
	const infoLS = JSON.parse(localStorage.getItem(key) || '[]');
	infoLS.push(data);
	localStorage.setItem(key, JSON.stringify(infoLS));
};
