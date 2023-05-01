import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar: FC = () => {
	return (
		<div className="-mt-8 flex justify-center w-full h-16 ">
			<input
				type="text"
				className="rounded-l-3xl border-l border-b border-t shadow-md w-1/3 p-3"
				placeholder="Buscar servicio"
			/>
			<div className="bg-white border-r border-b border-t rounded-r-3xl p-3 flex justify-center items-center">
				<div className="rounded-full bg-black text-white h-11 w-11 flex justify-center items-center">
					<BsSearch className="text-3xl" />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
