import React from "react";
import { useNavigate } from "react-router";
import type { Event } from "../../types/event";
import { MatchScoreDisplay } from "./MatchScoreDisplay";
import { MatchTeamsDisplay } from "./MatchTeamsDisplay";
import { MatchTimeDisplay } from "./MatchTimeDisplay";

interface MatchCardProps {
	event: Event;
	selectedDate?: string;
}

export const MatchCard: React.FC<MatchCardProps> = ({
	event,
	selectedDate,
}) => {
	const navigate = useNavigate();
	const isLive = event.strStatus === "1H" || event.strStatus === "2H";
	const liveStyle = isLive
		? {
				background:
					"linear-gradient(90deg, rgba(0, 255, 165, 0.1) 0%, rgba(17, 24, 39, 0) 30.77%)",
			}
		: {};

	const handleMatchClick = () => {
		navigate(`/match/${event.idEvent}`, { state: { selectedDate } });
	};

	return (
		<div className="w-full p-2 px-0 h-19 hover:bg-gray-750 transition-colors text-left rounded-none! border-b! border-border-base">
			<div
				className="flex items-center justify-between h-15! cursor-pointer"
				style={liveStyle}
				onClick={handleMatchClick}
			>
				<div className="flex flex-1 items-center space-x-4">
					<MatchTimeDisplay event={event} />
					<MatchTeamsDisplay event={event} />
				</div>
				<MatchScoreDisplay event={event} />
			</div>
		</div>
	);
};
