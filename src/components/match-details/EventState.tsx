import type React from "react";
import { useEventTimeline } from "../../hooks/useEventTimeline";
import type { Event, EventStat } from "../../types/event";
import { ErrorState } from "../ErrorState";
import { LoadingState } from "../LoadingState";
import { AwayRow } from "./AwayRow";
import { HomeRow } from "./HomeRow";

interface EventStatsProps {
	event: Event;
}

const TimelineRow = (event: EventStat) => {
	const isHomeTeam = event.strHome === "Yes";

	if (isHomeTeam) {
		return <HomeRow event={event} />;
	} else {
		return <AwayRow event={event} />;
	}
};

const EventStats: React.FC<EventStatsProps> = ({ event }) => {
	const eventId = event.idEvent;
	const { data, isLoading, error } = useEventTimeline(
		eventId,
		event?.strStatus,
	);

	if (isLoading) {
		return <LoadingState />;
	}

	if (error) {
		return <ErrorState message={`Error loading events: ${error.message}`} />;
	}

	const eventStats = data?.timeline || [];

	const groupedEvents: { [key: string]: EventStat[] } = {};
	eventStats.forEach((stat) => {
		const time = stat.intTime;
		if (!groupedEvents[time]) {
			groupedEvents[time] = [];
		}
		groupedEvents[time].push(stat);
	});

	const sortedTimes = Object.keys(groupedEvents).sort(
		(a, b) => parseInt(b) - parseInt(a),
	);

	return (
		<div className="p-4 bg-background-surface gap-4 text-white rounded-lg">
			<h2 className="text-sm font-semibold leading-5">Events</h2>
			{event?.strStatus === "FT" ||
				(event?.strStatus === "Match Finished" && (
					<div className="flex items-center justify-center py-4">
						<div className="text-gray-400 w-full text-center font-medium relative flex items-center">
							<div className="flex-1 border-t border-border-base"></div>
							<span className="relative bg-background-subtle text-xs leading-4 px-6 text-white whitespace-nowrap">
								Fulltime {event.intHomeScore} - {event.intAwayScore}
							</span>
							<div className="flex-1 border-t border-border-base"></div>
						</div>
					</div>
				))}
			{eventStats.length === 0 ? (
				<div className="text-center text-gray-400 py-8">
					No events available
				</div>
			) : (
				<div className="space-y-4">
					{sortedTimes.map((time) => (
						<div key={time} className="space-y-2">
							{groupedEvents[time].map((stat, index) => (
								<div key={`${stat.idTimeline}-${index}`} className="pl-4">
									<TimelineRow {...stat} />
								</div>
							))}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default EventStats;
