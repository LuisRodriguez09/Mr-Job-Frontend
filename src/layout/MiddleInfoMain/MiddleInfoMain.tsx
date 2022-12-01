import { FC } from 'react';
import { middleInfo } from './constants';
import { ContainerMiddleInfo, TitleMiddleInfo } from './MiddleInfoMainStyles';

const MiddleInfoMain: FC = () => {
	return (
		<section className="flex flex-col mt-7">
			{middleInfo.map(({ img, title, text }, i) => (
				<div className="flex w-696" key={i}>
					{i % 2 === 0 ? (
						<ContainerMiddleInfo>
							<img className="w-3/6" src={img} alt="" />
							<div className="w-3/6 flex flex-col justify-center">
								<TitleMiddleInfo>{title}</TitleMiddleInfo>
								<p>{text}</p>
							</div>
						</ContainerMiddleInfo>
					) : (
						<ContainerMiddleInfo>
							<div className="w-3/6 flex flex-col justify-center">
								<TitleMiddleInfo>{title}</TitleMiddleInfo>
								<p>{text}</p>
							</div>
							<img className="w-3/6" src={img} alt="" />
						</ContainerMiddleInfo>
					)}
				</div>
			))}
		</section>
	);
};

export default MiddleInfoMain;
