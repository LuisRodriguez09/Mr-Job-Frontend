import { FC, useState } from 'react';
import { AiOutlineMinusCircle } from 'react-icons/ai';

interface IHelpQYA {
	question: string;
	answer: string;
}

const HelpQYA: FC<IHelpQYA> = ({ question, answer }) => {
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<div className="w-full py-2">
			<div className="flex justify-between">
				<p className="font-bold text-lg py-1">{question}</p>
				<AiOutlineMinusCircle
					className="cursor-pointer"
					onClick={() => setShowAnswer(!showAnswer)}
				/>
			</div>
			{showAnswer && <div className="text-gray-6670 w-2/4">{answer}</div>}
		</div>
	);
};

export default HelpQYA;
