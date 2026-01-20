import type React from "react";
import { MenuDots } from "../../icons/index";

interface Event {
	intHomeScore: string;
	intAwayScore: string;
}

interface MatchScoreDisplayProps {
	event: Event;
}

export const MatchScoreDisplay: React.FC<MatchScoreDisplayProps> = ({
	event,
}) => {
	return (
		<div className="flex items-center space-x-2 px-2 pr-0">
			<div className="flex flex-col items-start justify-between space-x-4 gap-y-2.5  h-full">
				<span className="text-xs font-semibold leading-4 text-center">
					{event.intHomeScore}
				</span>
				<span className="text-xs font-semibold leading-4 text-center">
					{event.intAwayScore}
				</span>
			</div>
			<div className="flex flex-col">
				<MenuDots />
			</div>
		</div>
	);
};
