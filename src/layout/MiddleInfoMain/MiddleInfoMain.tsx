import { FC } from 'react';
import { middleInfo } from './constants';
import { EmptyPanel } from './EmptyPanel';
import { ContainerMiddleInfo, TitleMiddleInfo } from './MiddleInfoMainStyles';

const MiddleInfoMain: FC = () => {
	return (
		<section className="flex flex-col mt-7">
			{middleInfo.map(({ img = null, title, text }, i) => (
				<div className="flex w-696" key={i}>
					{i % 2 === 0 ? (
						<ContainerMiddleInfo>
							<div className="w-3/6 flex flex-col justify-center mr-5 sm:text-left text-center">
								<TitleMiddleInfo>{title}</TitleMiddleInfo>
								<p>{text}</p>
							</div>
							{img ? (
								<img className="w-3/6" src={img} alt="" />
							) : (
								<EmptyPanel />
							)}
						</ContainerMiddleInfo>
					) : (
						<ContainerMiddleInfo>
							{img ? (
								<img className="w-3/6" src={img} alt="" />
							) : (
								<EmptyPanel />
							)}
							<div className="w-3/6 flex flex-col justify-center ml-5">
								<TitleMiddleInfo className="sm:text-right text-center">
									{title}
								</TitleMiddleInfo>
								<p className="sm:text-right text-center">{text}</p>
							</div>
						</ContainerMiddleInfo>
					)}
				</div>
			))}
		</section>
	);
};

export default MiddleInfoMain;
