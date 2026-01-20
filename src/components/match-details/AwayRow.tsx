import type React from "react";
import { DividerIcon } from "../../icons";
import type { EventStat } from "../../types/event";
import { getEventIcon } from "../../utils/eventIconUtils";
import { TimeBadge } from "./TimeBadge";

interface AwayRowProps {
	event: EventStat;
}

export const AwayRow: React.FC<AwayRowProps> = ({ event }) => {
	return (
		<div className="flex items-center justify-center">
			<div className="flex-1"></div>
			<TimeBadge time={event.intTime} />
			<div className="flex items-center gap-2.5 flex-1">
				<DividerIcon />
				{getEventIcon(event.strTimeline, event.strTimelineDetail)}
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
			</div>
		</div>
	);
};
