import { useEffect } from 'react';

export const useClikOutside: any = (
	ref: any,
	setShow: (show: boolean) => any
) => {
	useEffect(() => {
        document.addEventListener('keydown', evt => {
            if (evt.key === 'Escape') {
                setShow(false);
            }
        });
		const handleClickOutside: any = (event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setShow(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, setShow]);
};
