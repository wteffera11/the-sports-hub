import React from "react";
import type { Event } from "../../types/event";
import { MatchScoreDisplay } from "./MatchScoreDisplay";
import { MatchTeamsDisplay } from "./MatchTeamsDisplay";
import { MatchTimeDisplay } from "./MatchTimeDisplay";

interface MatchCardProps {
	event: Event;
}

export const MatchCard: React.FC<MatchCardProps> = ({ event }) => {
	const isLive = event.strStatus === "1H" || event.strStatus === "2H";
	const liveStyle = isLive
		? {
				background:
					"linear-gradient(90deg, rgba(0, 255, 165, 0.1) 0%, rgba(17, 24, 39, 0) 30.77%)",
			}
		: {};

	return (
		<div className="w-full p-2 px-0 h-[76px] hover:bg-gray-750 transition-colors text-left rounded-none! border-b! border-border-base">
			<div
				className="flex items-center justify-between h-[60px]! cursor-pointer"
				style={liveStyle}
			>
				<a
					className="flex flex-1 items-center space-x-4"
					href={`/matches/${event.idEvent}`}
				>
					<MatchTimeDisplay event={event} />
					<MatchTeamsDisplay event={event} />
				</a>
				<MatchScoreDisplay event={event} />
			</div>
		</div>
	);
};
