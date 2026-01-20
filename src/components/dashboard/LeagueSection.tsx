import type React from "react";
import { ChevronRightIcon } from "../../icons";
import type { LeagueSectionProps } from "../../types/event";
import { MatchCard } from "./MatchCard";

interface LeagueSectionPropsExtended extends LeagueSectionProps {
	selectedDate?: string;
}

export const LeagueSection: React.FC<LeagueSectionPropsExtended> = ({
	leagueName,
	events,
	selectedDate,
}) => {
	return (
		<div className="rounded-lg overflow-hidden bg-background-surface p-4 gap-2">
			<div className=" flex items-center justify-between mb-2">
				<h3 className="text-sm leading-5 text-foreground-base">{leagueName}</h3>
				<span className="text-xs cursor-pointer">
					<ChevronRightIcon />
				</span>
			</div>

			<div className="flex flex-col items-center">
				{events.map((event) => (
					<MatchCard
						key={event.idEvent}
						event={event}
						selectedDate={selectedDate}
					/>
				))}
			</div>
		</div>
	);
};
