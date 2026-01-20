import React from "react";
import { ArrowLeftIcon } from "../../icons";

interface MatchHeaderProps {
	league?: string;
	onBack?: () => void;
}

export const MatchHeader: React.FC<MatchHeaderProps> = ({ league, onBack }) => {
	return (
		<div className="flex items-center gap-x-4 mb-6 py-2">
			<button
				type="button"
				onClick={onBack}
				className="p-2 rounded-full hover:bg-gray-800 transition-colors"
				aria-label="Go back"
			>
				<ArrowLeftIcon />
			</button>

			<div className="text-sm leading-5 text-white">{league}</div>
		</div>
	);
};
