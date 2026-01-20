import type React from "react";
import type { Event } from "../../types/event";
import { TeamDisplay } from "./TeamDisplay";

interface MatchTeamsDisplayProps {
	event: Pick<
		Event,
		"strHomeTeam" | "strAwayTeam" | "strHomeTeamBadge" | "strAwayTeamBadge"
	>;
}

export const MatchTeamsDisplay: React.FC<MatchTeamsDisplayProps> = ({
	event,
}) => {
	return (
		<div className="flex flex-col items-start gap-y-2.5 space-x-3">
			<TeamDisplay
				teamName={event.strHomeTeam}
				teamBadge={event.strHomeTeamBadge}
			/>
			<TeamDisplay
				teamName={event.strAwayTeam}
				teamBadge={event.strAwayTeamBadge}
			/>
		</div>
	);
};
