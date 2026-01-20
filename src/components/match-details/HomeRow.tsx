import type React from "react";
import { DividerIcon } from "../../icons";
import type { EventStat } from "../../types/event";
import { getEventIcon } from "../../utils/eventIconUtils";
import { TimeBadge } from "./TimeBadge";

interface HomeRowProps {
	event: EventStat;
}

export const HomeRow: React.FC<HomeRowProps> = ({ event }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex items-center gap-2.5 flex-1 text-right justify-end">
				<div>
					<div className="text-sm font-medium text-white">
						{event.strPlayer}
					</div>
					{event.strTimelineDetail && event.strTimeline !== "Card" && (
						<div className="text-xs text-gray-400">
							{event.strTimelineDetail}
						</div>
					)}
				</div>
				{getEventIcon(event.strTimeline, event.strTimelineDetail)}
				<DividerIcon />
			</div>
			<TimeBadge time={event.intTime} />
			<div className="flex-1"></div>
		</div>
	);
};
