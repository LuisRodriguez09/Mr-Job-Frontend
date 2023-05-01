import { FC } from 'react';
import ContactSupport from './ContactSupport';
import HelpQYA from './HelpQYA';
import { questionsAndAnswers } from './HelpQYA/constants';

const HelpProfile: FC = () => {
	return (
		<div className="w-full pl-6">
			<h1 className="text-6xl font-bold pb-6">Ayuda</h1>
			<p className="font-bold text-2xl">Preguntas frecuentes</p>
			<div className="py-4">
				{questionsAndAnswers.map(({ question, answer, id }) => (
					<HelpQYA key={id} question={question} answer={answer} />
				))}
			</div>
			<div>
				<ContactSupport />
			</div>
		</div>
	);
};

export default HelpProfile;
