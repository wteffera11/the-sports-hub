import React from "react";

interface EventDetail {
	strHomeTeam: string;
	strAwayTeam: string;
	intHomeScore: string;
	intAwayScore: string;
	strStatus: string;
}

interface MatchScoreProps {
	event: EventDetail;
}

export const MatchScore: React.FC<MatchScoreProps> = ({ event }) => {
	return (
		<div className="text-center">
			<div className="text-3xl font-bold mb-2">
				{event.strStatus === "Match Finished" ? (
					<div className="flex items-center space-x-2">
						<span className="text-lg">{event.intHomeScore}</span>
						<span className="text-gray-400">-</span>
						<span className="text-lg">{event.intAwayScore}</span>
					</div>
				) : (
					<div className="text-sm text-gray-400">vs</div>
				)}
			</div>
			<div
				className={`text-xs px-2 py-1 rounded ${
					event.strStatus === "Match Finished"
						? "bg-green-900 text-green-300"
						: event.strStatus === "Not Started"
							? "bg-yellow-900 text-yellow-300"
							: "bg-blue-900 text-blue-300"
				}`}
			>
				{event.strStatus}
			</div>
		</div>
	);
};
